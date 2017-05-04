m = angular.module "lens.getting_started", []


m.controller "GettingStartedController", (
  $scope
) ->
  return this


m.directive "gettingStarted", ->
  controller: "GettingStartedController"
  restrict: "E"
  scope: {}
  template: template


template = """
<header class="guide-banner" role="banner">
  <a ui-sref="index" ui-sref-active="active" class="guide-name">Lens</a>
  <div class="guide-skip-content">
    <a href="#navigation">Skip to Navigation</a>
  </div>
  <a href="#" id="hamburger" class="hamburger-button">
    <span class="hamburger"></span>
  </a>
</header>

<lens-main>


  <section id="getting-started">
    <p class="guide-content-description m-b-4-xs">Lens includes resources to create user interfaces consistent with the Looker brand and best practices. Here are few things to consider before you start using Lens on your next project.</p>

    <h2 id="Markup" class="guide-content-subtitle m-b-2-xs">Markup Considerations</h2>
    <p class="m-b-4-xs">Lens contains a lot of utility classes that can be stacked up to quickly create layouts and components. While it may look a little messier than you are used to on the markup side of things, this saves us a ton of extra CSS. These classes also make it much more clear what styles are applied to an element to anyone looking at the markup. When building layouts and such with Lens, make sure you don't apply extra styles on containers and grid columns. Anything needing styles outside of utility classes should typically be nested inside those types of containers.</p>

    <h2 id="BEM" class="guide-content-subtitle m-b-2-xs">BEM Class Naming</h2>
    <p class="m-b-2-xs">BEM is a well-known method of naming components — block, element, modifier. For those unfamiliar or who need a quick refresh, let’s briefly look at how BEM works. As an example, we’ll build a sandwich component.</p>
    <h3 class="guide-content-h3 m-b-1-xs">Block</h3>
    <p class="m-b-2-xs">A block represents the main component. If you were building a tasty sandwich, the class name would be <code>.sandwich</code>. All the properties that would be shared by all different sandwiches would be included within <code>.sandwich</code>.</p>
    <h3 class="guide-content-h3 m-b-1-xs">Element</h3>
    <p class="m-b-2-xs">An element is part of the main component and its class name is separated by two underscores. The bread of the sandwich would be reprented by the class <code>.sandwich__bread</code>. The cheese would be <code>.sandwich__cheese</code>. Be on the look out for smaller component possibilities within a larger component. If we were to take a look at sandwich condiments, which can be used on other things outside of sandwiches. We'd want to avoid a class name such as <code>.sandwich__condiment__mayo</code>. We could use something like <code>.sandwich__condiment--mayo</code> because a single dash doesn't represent anything in BEM. But, since condiments can be used on things other than sandwiches, we could make this a component in an of itself. In that case, we could name it <code>.condiment__mayo</code> and use that inside the sandwich element.</p>
    <h3 class="guide-content-h3 m-b-1-xs">Modifier</h3>
    <p class="m-b-2-xs">A modifier is a component or element variation that only slightly differes from the main element. The variation can be applied to the entire element or just a part of it. Since the properties that should apply to every sandwich are placed on the main <code>.sandwich</code> class, all sandwiches receive the <code>.sandwich</code> class as the base. If there is a variation of a sandwich &mdash; maybe it has wheat bread &mdash; the <code>.sandwich--wheat</code> class would be added the component in addition to the <code>.sandwich</code> class.</p>
    <p class="m-b-4-xs">If the sandwich has swiss cheese, a variation can be placed on the cheese element itself, like <code>.sandwich__cheese--swiss</code>.</p>

    <h2 id="Utilities" class="guide-content-subtitle m-b-2-xs">Utility Classes</h2>
    <p class="m-b-4-xs">The one place we diverge from BEM is within our utility classes. These are immutable classes that use <code>!important</code> to ensure they never break. And for the most part are classes that only apply a single property, which is why we felt okay using the important declaration on them. Lens's utility classes should be used whenever possible to create the layout and style of a page or element. Each utility class end with a breakpoint suffix. Since Lens is built mobile-first, you'd apply the <code>-xs</code> suffix to make those styles work across all breakpoints. To modify those styles at a larger breakpoint, you'd apply an additional utility class that employs one of the other suffixes, such as <code>-sm</code>, <code>-md</code>, <code>-lg</code>, <code>-xl</code>. Whichever the highest suffix is, those styles will apply all the way up through any screen size. To learn more about these suffixes, take a gander at the <a href="responsive.html">Responsive</a> page.</p>

    <h2 id="Mixins" class="guide-content-subtitle m-b-2-xs">Mixins, Variables and Functions</h2>
    <p class="m-b-4-xs">Lens comes with different mixins, variables and functions that make it easy to apply its styles to elements or components that aren't contained within Lens. To learn more about the Sassy goodness within Lens, read through the <a href="sass.html">Sass</a> page.</p>

  </section>


</lens-main>

<main-nav></main-nav>

<footer class="guide-contentinfo" role="contentinfo">
  <p class="guide-contentinfo-copy">Copyright &copy; 2017 Looker. All rights reserved.</p>
</footer>

"""
