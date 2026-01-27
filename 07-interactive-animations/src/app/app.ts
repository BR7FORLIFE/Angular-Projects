import { Component, signal, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { NgClass } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { InfoLabel } from './components/labelInfo.component';
import { navurl, imagePresentation, labelInfo } from './constants/constant';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  imports: [NgClass, InfoLabel],
  template: `
    <section #scene class="w-dvw h-dvh relative">
      <!--header-->
      <header #header class="fixed w-full h-auto flex flex-row justify-between items-center px-12">
        <div>
          <img [src]="'images/logo.svg'" alt="logo icon" class="w-38 h-auto object-cover" />
        </div>
        <nav class="flex flex-row gap-8">
          @for (nav of navurl; track nav.id) {
            <div
              class="w-auto h-10 inline-flex justify-start items-center border-r-2 border-orange-400 px-2"
            >
              <span class="text-sm hover:text-purple-600">{{ nav.name }}</span>
            </div>
          }
        </nav>
      </header>

      <!--main content-->
      <main class="w-dvw flex flex-col">
        <!--hero-->
        <section #hero class="w-full h-dvh flex flex-col items-center justify-center">
          <div #description>
            <img
              [src]="'images/description.svg'"
              alt="description icon"
              class="w-154 h-auto object-cover"
            />
          </div>
          <section class="w-172 h-10 flex justify-center items-center">
            <div class="w-12 h-3 bg-purple-900"></div>
            <div class="w-12 h-3 bg-orange-600"></div>
          </section>

          <div class="w-182 h-auto">
            <p class="text-lg text-neutral-300 text-center">
              We are a small Cambridge-based design studio. Our goal is to offer the same expertise
              of a large agency without the high price tag or formality. Cutting-edge technology and
              elegant aesthetics are our passion and strength.
            </p>
          </div>
        </section>

        <!--label information-->
        <app-label-info
          title="Your website shows"
          complement="authority in your field."
          paragraph="Develop your image or brand from scratch, or build a website with your existing brand
              assets. We can help you do both."
        ></app-label-info>

        <!--gallery of images-->
        <article class="relative w-full h-[82vh] flex flex-row gap-2">
          <img
            [src]="'images/background-2.svg'"
            alt="background icon"
            class="absolute top-0 left-0 w-full h-[72vh] object-cover -z-10 transform -skew-y-6 origin-top-left"
          />
          @for (image of imagePresentation; track $index) {
            <div>
              <img [src]="image" alt="images" class="w-96 h-auto object-contain" />
            </div>
          }
        </article>

        <!--label info-->
        <section>
          @for (info of labelInfo; track info.id) {
            <div
              class="w-full flex justify-center"
              [ngClass]="{
                'pr-96': info.id != 2,
                'pl-96': info.id === 2,
              }"
            >
              <div
                class="max-w-xl p-6 border-orange-400"
                [ngClass]="{
                  'border-l-4 text-left': info.id !== 2,
                  'border-r-4 text-right': info.id === 2,
                }"
              >
                <h3 class="text-4xl font-semibold">{{ info.name }}</h3>
                <p class="text-neutral-300">{{ info.paragraph }}</p>
              </div>
            </div>
          }
        </section>

        <!--apple transition-->
        <div class="mt-12 relative min-w-screen h-[72vh]">
          <img
            [src]="'web-images/3.webp'"
            alt=""
            class="absolute inset-0 -z-10 w-full h-[72vh] object-cover will-change-transform"
          />
        </div>

        <!--app label info-->
        <app-label-info
          height="80vh"
          title="Personal, Start-Ups, Events"
          complement=" Portfolios, E-commerce."
          paragraph="Small businesses need a little edge to get noticed. That is what we can do for you.
              Whatever your category is, we can elevate your brand and captivate your audience with
              interactive and responsive designs."
        ></app-label-info>

        <!--responsive design section-->
        <section
          class="relative min-w-screen h-[84vh] flex flex-row gap-2 justify-center items-center"
        >
          <img
            src="images/background-3.svg"
            alt="background svg"
            class="absolute top-0 left-0 w-full h-[96vh] object-cover -z-10 transform -skew-y-6 origin-top-left"
          />
          <article>
            <img [src]="'images/responsive.svg'" alt="" class="object-contain" />
          </article>
          <article class="w-146 flex flex-col gap-6">
            <h2 class="">Responsive Design.</h2>
            <p class="text-neutral-200 text-xl font-thin">
              A <span class="text-white font-medium">responsive</span> website can adapt to a wide
              range of devices, including deskttext-4xl text-white font-semiboldop computers,
              laptops, tablets, and mobile phones.<br /><br />
              However, we believe that developing a website with
              <span class="text-white font-medium">fluidity, interactivity</span>, and
              <span class="text-white font-medium">content-driven design</span> can elevate its
              responsiveness to the next level.<br /><br />
              While the fluidity of layouts makes the user experience optimal and pleasurable,
              <span> macro</span> and
              <span class="text-white font-medium">micro-interactivity</span> can keep your audience
              curious, engaged, and receptive.<br /><br />
              ‍ <span class="text-white font-medium">Relevant</span>and
              <span class="text-white font-medium">informative</span> content can also show that
              your website is committed to your audiences' goals. We develop our websites keeping
              all these aspects of <span class="text-white font-medium">responsiveness</span> at the
              forefront.
            </p>
            <a href="#" class="text-purple-500 underline"
              >Read our blog post on responsive design</a
            >
          </article>
        </section>

        <!--app label info-->
        <app-label-info
          height="85vh"
          title="It's all yours"
          complement="No hidden costs or ties."
          paragraph="We will fine-tune your website to perform well in search engines (SEO) and maximise
              your presence on the web to develop more leads. And well give you the aftercare you
              need to manage your site easily."
        ></app-label-info>

        <section
          class="relative min-w-screen h-screen flex flex-row gap-24 justify-center items-center"
        >
          <img
            src="images/background-3.svg"
            alt="background svg"
            class="absolute top-0 left-0 w-full h-[96vh] object-cover -z-10 transform -skew-y-6 origin-top-left"
          />
          <div class="w-146 flex flex-col gap-6">
            <h2 class="text-4xl text-white font-semibold">UX Design.</h2>
            <p class="text-neutral-200 text-xl font-thin">
              The goal of <span class="text-white font-medium">User Experience Design</span> is to
              create a product that is not only functional and efficient but also
              <span class="text-white font-medium">visually pleasing</span>
              and fun to use. A well-designed website can offer a
              <span class="text-white font-medium">comfortable, friendly,</span> and
              <span class="text-white font-medium">inclusive</span> user experience to all its
              visitors. Before we develop a website, we
              <span class="text-white font-medium">research</span> and understand your audiences
              habits and needs. After all, they are the real
              <span class="text-white font-medium">end users</span> of your website. Simply put, for
              us, UX design is all about making sure an end user has a
              <span class="text-white font-medium">great time</span> using your website in every
              possible way.<br />
            </p>
            <a href="#" class="text-purple-500">Read our blog post on UX Design</a>
          </div>
          <div class="relative w-1/3 h-full">
            <img
              src="images/monitor.png"
              alt="monitor icon"
              class="absolute inset-0 top-18 left-24 w-auto h-119"
            />
            <img
              src="images/content-monitor.png"
              alt="monitor icon"
              class="absolute inset-0 top-18"
            />
          </div>
        </section>
      </main>
    </section>
  `,
  styleUrl: './app.css',
})
export class App implements AfterViewInit {
  protected readonly title = signal('07-interactive-animations');
  protected navurl = navurl;
  protected imagePresentation = imagePresentation;
  protected labelInfo = labelInfo;
  @ViewChild('scene', { static: true }) scene!: ElementRef;
  @ViewChild('header', { static: true }) header!: ElementRef;
  @ViewChild('description', { static: true }) description!: ElementRef;
  @ViewChild('hero', { static: true }) hero!: ElementRef;

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    const headerEl = this.header.nativeElement;

    //animacion para el header
    gsap.set(headerEl, { y: 0 });

    ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => {
        if (self.direction === 1) {
          // scroll down
          gsap.to(headerEl, {
            y: -120,
            duration: 1,
            ease: 'power3.out',
            overwrite: true,
          });
        } else {
          //scroll up
          gsap.to(headerEl, {
            y: 0,
            duration: 1.5,
            ease: 'power3.out',
            overwrite: true,
          });
        }
      },
    });

    //animacion para hero - description
    const tlDescription = gsap.timeline({
      scrollTrigger: {
        trigger: this.hero.nativeElement,
        start: 'top top',
        end: () => `+=${window.innerHeight}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        pinSpacing: true,
        markers: true,
      },
    });

    tlDescription.fromTo(
      this.description.nativeElement,
      { scale: 1 },
      { scale: 1.3, ease: 'power2.in', duration: 0.5 },
    );
  }
}
