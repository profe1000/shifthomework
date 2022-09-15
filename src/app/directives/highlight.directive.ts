import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input('appHighlight') Highlight = 'blue';
  @Input() permissions: string[] = ['Admin', 'Manager'];

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('red');
  }

  subscription = new Subscription();

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.Highlight;
    if (!this.hasPermission()) {
      this.el.nativeElement.style.backgroundColor = this.Highlight;
      this.el.nativeElement.disabled = true;

      // Disable for non Button element
      this.el.nativeElement.style.opacity = 0.3;

      const element = this.el.nativeElement;
      this.subscription = fromEvent(element.parentNode, 'click', {
        capture: true,
      }).subscribe((e: any) => {
        if (e.target === element) {
          e.stopPropagation();
        }
      });
    }
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  hasPermission(): boolean {
    const hasPermission = this.permissions.some((role) => {
      console.log(role + this.accesspermission(role));
      return this.accesspermission(role);
    });

    console.log(hasPermission);
    return hasPermission;
  }

  accesspermission(role: string): boolean {
    const myusertype = 'User';
    if (myusertype == role) {
      return true;
    }

    return false;
  }
}
