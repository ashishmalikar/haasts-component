<template>
  <div>
    <hds-component-header title="Icons" description="An icon set contains an arbitrary number of glyphs"/>
    <div style="padding: 2rem">
      <div class="hds-search hds-icon">
        <div class="hds-input hds-icon">
          <hds-icon name="hds-search"></hds-icon>
          <input type="text" placeholder="Search Icon...">
        </div>
      </div>
      <hds-segment title="Accessibility" description="Icons can represent accessibility standards">
        <hds-grid cols="6">
          <hds-column> <hds-icon size="big" name="hds-american hds-sign hds-language hds-interpreting"></hds-icon> <br/><br/> <div class="hds-label"> american sign language interpreting </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-assistive hds-listening hds-systems"></hds-icon>  <br/><br/> <div class="hds-label"> assistive listening systems </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-audio hds-description"></hds-icon>  <br/><br/> <div class="hds-label"> audio description </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-blind"></hds-icon> <br/><br/> <div class="hds-label"> blind </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-braille"></hds-icon>  <br/><br/> <div class="hds-label"> braille </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-closed hds-captioning"></hds-icon>  <br/><br/> <div class="hds-label"> closed captioning </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-closed hds-captioning hds-outline"></hds-icon>  <br/><br/> <div class="hds-label"> closed captioning outline </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-deaf"></hds-icon>  <br/><br/> <div class="hds-label"> deaf </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-low hds-vision"></hds-icon>  <br/><br/> <div class="hds-label"> low vision </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-phone hds-volume"></hds-icon>  <br/><br/> <div class="hds-label"> phone volume </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-question hds-circle"></hds-icon>  <br/><br/> <div class="hds-label"> question circle </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-question hds-circle hds-outline"></hds-icon>  <br/><br/> <div class="hds-label"> question circle outline </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-sign hds-language"></hds-icon>  <br/><br/> <div class="hds-label"> sign language </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-tty"></hds-icon>  <br/><br/> <div class="hds-label"> tty </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-universal hds-access"></hds-icon>  <br/><br/> <div class="hds-label"> universal access </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-wheelchair"></hds-icon>  <br/><br/> <div class="hds-label"> wheelchair </div> </hds-column>
        </hds-grid>
        <template slot="actions">
          <prism language="html">
            &lt;hds-icon name="hds-american hds-sign hds-language hds-interpreting"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-assistive hds-listening hds-systems"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-audio hds-description"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-blind"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-braille"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-closed hds-captioning"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-closed hds-captioning hds-outline"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-deaf"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-low hds-vision"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-phone hds-volume"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-question hds-circle"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-question hds-circle hds-outline"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-sign hds-language"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-tty"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-universal hds-access"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-wheelchair"&gt;&lt;/hds-icon&gt;
          </prism>
        </template>
      </hds-segment>
      <hds-segment title="Arrows" description="Icons can be used to indicate a direction">
        <hds-grid cols="6">
          <hds-column> <hds-icon size="big" name="hds-angle hds-double hds-down"></hds-icon> <br/> <br/> <div class="hds-label"> angle double down </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-angle hds-double hds-left"></hds-icon> <br/> <br/> <div class="hds-label"> angle double left </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-angle hds-double hds-right"></hds-icon> <br/> <br/> <div class="hds-label"> angle double right </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-angle hds-double hds-up"></hds-icon> <br/> <br/> <div class="hds-label"> angle double up </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-angle hds-down"></hds-icon> <br/> <br/> <div class="hds-label"> angle down </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-angle hds-left"></hds-icon> <br/> <br/> <div class="hds-label"> angle left </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-angle hds-right"></hds-icon> <br/> <br/> <div class="hds-label"> angle right </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-angle hds-up"></hds-icon> <br/> <br/> <div class="hds-label"> angle up </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-arrow hds-alternate hds-circle hds-down"></hds-icon> <br/> <br/> <div class="hds-label"> arrow alternate circle down </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-arrow hds-alternate hds-circle hds-down hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> arrow alternate circle down outline </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-arrow hds-alternate hds-circle hds-left"></hds-icon> <br/> <br/> <div class="hds-label"> arrow alternate circle left </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-arrow hds-alternate hds-circle hds-left hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> arrow alternate circle left outline </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-arrow hds-alternate hds-circle hds-right"></hds-icon> <br/> <br/> <div class="hds-label"> arrow alternate circle right </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-arrow hds-alternate hds-circle hds-right hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> arrow alternate circle right outline </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-arrow hds-alternate hds-circle hds-up"></hds-icon> <br/> <br/> <div class="hds-label"> arrow alternate circle up </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-arrow hds-alternate hds-circle hds-up hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> arrow alternate circle up outline </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-arrow hds-circle hds-down"></hds-icon> <br/> <br/> <div class="hds-label"> arrow circle down </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-arrow hds-circle hds-left"></hds-icon> <br/> <br/> <div class="hds-label"> arrow circle left </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-arrow hds-circle hds-right"></hds-icon> <br/> <br/> <div class="hds-label"> arrow circle right </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-arrow hds-circle hds-up"></hds-icon> <br/> <br/> <div class="hds-label"> arrow circle up </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-arrow hds-down"></hds-icon> <br/> <br/> <div class="hds-label"> arrow down </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-arrow hds-left"></hds-icon> <br/> <br/> <div class="hds-label"> arrow left </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-arrow hds-right"></hds-icon> <br/> <br/> <div class="hds-label"> arrow right </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-arrow hds-up"></hds-icon> <br/> <br/> <div class="hds-label"> arrow up </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-arrows hds-alternate"></hds-icon> <br/> <br/> <div class="hds-label"> arrows alternate </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-arrows hds-alternate hds-horizontal"></hds-icon> <br/> <br/> <div class="hds-label"> arrows alternate horizontal </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-arrows hds-alternate hds-vertical"></hds-icon> <br/> <br/> <div class="hds-label"> arrows alternate vertical </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-caret hds-down"></hds-icon> <br/> <br/> <div class="hds-label"> caret down </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-caret hds-left"></hds-icon> <br/> <br/> <div class="hds-label"> caret left </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-caret hds-right"></hds-icon> <br/> <br/> <div class="hds-label"> caret right </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-caret hds-square hds-down"></hds-icon> <br/> <br/> <div class="hds-label"> caret square down </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-caret hds-square hds-down hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> caret square down outline </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-caret hds-square hds-left"></hds-icon> <br/> <br/> <div class="hds-label"> caret square left </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-caret hds-square hds-left hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> caret square left outline </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-caret hds-square hds-right"></hds-icon> <br/> <br/> <div class="hds-label"> caret square right </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-caret hds-square hds-right hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> caret square right outline </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-caret hds-square hds-up"></hds-icon> <br/> <br/> <div class="hds-label"> caret square up </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-caret hds-square hds-up hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> caret square up outline </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-caret hds-up"></hds-icon> <br/> <br/> <div class="hds-label"> caret up </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-cart hds-arrow hds-down"></hds-icon> <br/> <br/> <div class="hds-label"> cart arrow down </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-chart hds-line"></hds-icon> <br/> <br/> <div class="hds-label"> chart line </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-chevron hds-circle hds-down"></hds-icon> <br/> <br/> <div class="hds-label"> chevron circle down </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-chevron hds-circle hds-left"></hds-icon> <br/> <br/> <div class="hds-label"> chevron circle left </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-chevron hds-circle hds-right"></hds-icon> <br/> <br/> <div class="hds-label"> chevron circle right </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-chevron hds-circle hds-up"></hds-icon> <br/> <br/> <div class="hds-label"> chevron circle up </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-chevron hds-down"></hds-icon> <br/> <br/> <div class="hds-label"> chevron down </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-chevron hds-left"></hds-icon> <br/> <br/> <div class="hds-label"> chevron left </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-chevron hds-right"></hds-icon> <br/> <br/> <div class="hds-label"> chevron right </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-chevron hds-up"></hds-icon> <br/> <br/> <div class="hds-label"> chevron up </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-cloud hds-download"></hds-icon> <br/> <br/> <div class="hds-label"> cloud download </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-cloud hds-upload"></hds-icon> <br/> <br/> <div class="hds-label"> cloud upload </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-download"></hds-icon> <br/> <br/> <div class="hds-label"> download </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-exchange hds-alternate"></hds-icon> <br/> <br/> <div class="hds-label"> exchange alternate </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-expand hds-arrows hds-alternate"></hds-icon> <br/> <br/> <div class="hds-label"> expand arrows alternate </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-external hds-alternate"></hds-icon> <br/> <br/> <div class="hds-label"> external alternate </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-external hds-square hds-alternate"></hds-icon> <br/> <br/> <div class="hds-label"> external square alternate </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-hand hds-point hds-down"></hds-icon> <br/> <br/> <div class="hds-label"> hand point down </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-hand hds-point hds-down hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> hand point down outline </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-hand hds-point hds-left"></hds-icon> <br/> <br/> <div class="hds-label"> hand point left </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-hand hds-point hds-left hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> hand point left outline </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-hand hds-point hds-right"></hds-icon> <br/> <br/> <div class="hds-label"> hand point right </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-hand hds-point hds-right hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> hand point right outline </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-hand hds-point hds-up"></hds-icon> <br/> <br/> <div class="hds-label"> hand point up </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-hand hds-point hds-up hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> hand point up outline </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-hand hds-pointer"></hds-icon> <br/> <br/> <div class="hds-label"> hand pointer </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-hand hds-pointer hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> hand pointer outline </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-history"></hds-icon> <br/> <br/> <div class="hds-label"> history </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-level hds-down hds-alternate"></hds-icon> <br/> <br/> <div class="hds-label"> level down alternate </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-level hds-up hds-alternate"></hds-icon> <br/> <br/> <div class="hds-label"> level up alternate </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-location hds-arrow"></hds-icon> <br/> <br/> <div class="hds-label"> location arrow </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-long hds-arrow hds-alternate hds-down"></hds-icon> <br/> <br/> <div class="hds-label"> long arrow alternate down </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-long hds-arrow hds-alternate hds-left"></hds-icon> <br/> <br/> <div class="hds-label"> long arrow alternate left </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-long hds-arrow hds-alternate hds-right"></hds-icon> <br/> <br/> <div class="hds-label"> long arrow alternate right </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-long hds-arrow hds-alternate hds-up"></hds-icon> <br/> <br/> <div class="hds-label"> long arrow alternate up </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-mouse hds-pointer"></hds-icon> <br/> <br/> <div class="hds-label"> mouse pointer </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-play"></hds-icon> <br/> <br/> <div class="hds-label"> play </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-random"></hds-icon> <br/> <br/> <div class="hds-label"> random </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-recycle"></hds-icon> <br/> <br/> <div class="hds-label"> recycle </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-redo"></hds-icon> <br/> <br/> <div class="hds-label"> redo </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-redo hds-alternate"></hds-icon> <br/> <br/> <div class="hds-label"> redo alternate </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-reply"></hds-icon> <br/> <br/> <div class="hds-label"> reply </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-reply hds-all"></hds-icon> <br/> <br/> <div class="hds-label"> reply all </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-retweet"></hds-icon> <br/> <br/> <div class="hds-label"> retweet </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-share"></hds-icon> <br/> <br/> <div class="hds-label"> share </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-share hds-square"></hds-icon> <br/> <br/> <div class="hds-label"> share square </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-share hds-square hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> share square outline </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-sign hds-in hds-alternate"></hds-icon> <br/> <br/> <div class="hds-label"> sign in alternate </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-sign hds-out hds-alternate"></hds-icon> <br/> <br/> <div class="hds-label"> sign out alternate </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-sort"></hds-icon> <br/> <br/> <div class="hds-label"> sort </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-sort hds-alphabet hds-down"></hds-icon> <br/> <br/> <div class="hds-label"> sort alphabet down </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-sort hds-alphabet hds-up"></hds-icon> <br/> <br/> <div class="hds-label"> sort alphabet up </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-sort hds-amount hds-down"></hds-icon> <br/> <br/> <div class="hds-label"> sort amount down </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-sort hds-amount hds-up"></hds-icon> <br/> <br/> <div class="hds-label"> sort amount up </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-sort hds-down"></hds-icon> <br/> <br/> <div class="hds-label"> sort down </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-sort hds-numeric hds-down"></hds-icon> <br/> <br/> <div class="hds-label"> sort numeric down </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-sort hds-numeric hds-up"></hds-icon> <br/> <br/> <div class="hds-label"> sort numeric up </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-sort hds-up"></hds-icon> <br/> <br/> <div class="hds-label"> sort up </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-sync"></hds-icon> <br/> <br/> <div class="hds-label"> sync </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-sync hds-alternate"></hds-icon> <br/> <br/> <div class="hds-label"> sync alternate </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-text hds-height"></hds-icon> <br/> <br/> <div class="hds-label"> text height </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-text hds-width"></hds-icon> <br/> <br/> <div class="hds-label"> text width </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-undo"></hds-icon> <br/> <br/> <div class="hds-label"> undo </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-undo hds-alternate"></hds-icon> <br/> <br/> <div class="hds-label"> undo alternate </div>  </hds-column>
          <hds-column> <hds-icon size="big" name="hds-upload"></hds-icon>  <br/> <br/> <div class="hds-label"> upload </div> </hds-column> 
        </hds-grid>
        <template slot="actions">
          <prism language="html">
            &lt;hds-icon size="big" name="hds-angle hds-double hds-down"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-angle hds-double hds-left"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-angle hds-double hds-right"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-angle hds-double hds-up"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-angle hds-down"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-angle hds-left"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-angle hds-right"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-angle hds-up"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-arrow hds-alternate hds-circle hds-down"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-arrow hds-alternate hds-circle hds-down hds-outline"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-arrow hds-alternate hds-circle hds-left"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-arrow hds-alternate hds-circle hds-left hds-outline"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-arrow hds-alternate hds-circle hds-right"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-arrow hds-alternate hds-circle hds-right hds-outline"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-arrow hds-alternate hds-circle hds-up"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-arrow hds-alternate hds-circle hds-up hds-outline"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-arrow hds-circle hds-down"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-arrow hds-circle hds-left"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-arrow hds-circle hds-right"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-arrow hds-circle hds-up"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-arrow hds-down"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-arrow hds-left"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-arrow hds-right"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-arrow hds-up"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-arrows hds-alternate"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-arrows hds-alternate hds-horizontal"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-arrows hds-alternate hds-vertical"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-caret hds-down"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-caret hds-left"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-caret hds-right"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-caret hds-square hds-down"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-caret hds-square hds-down hds-outline"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-caret hds-square hds-left"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-caret hds-square hds-left hds-outline"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-caret hds-square hds-right"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-caret hds-square hds-right hds-outline"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-caret hds-square hds-up"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-caret hds-square hds-up hds-outline"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-caret hds-up"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-cart hds-arrow hds-down"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-chart hds-line"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-chevron hds-circle hds-down"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-chevron hds-circle hds-left"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-chevron hds-circle hds-right"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-chevron hds-circle hds-up"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-chevron hds-down"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-chevron hds-left"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-chevron hds-right"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-chevron hds-up"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-cloud hds-download"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-cloud hds-upload"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-download"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-exchange hds-alternate"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-expand hds-arrows hds-alternate"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-external hds-alternate"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-external hds-square hds-alternate"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-hand hds-point hds-down"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-hand hds-point hds-down hds-outline"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-hand hds-point hds-left"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-hand hds-point hds-left hds-outline"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-hand hds-point hds-right"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-hand hds-point hds-right hds-outline"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-hand hds-point hds-up"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-hand hds-point hds-up hds-outline"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-hand hds-pointer"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-hand hds-pointer hds-outline"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-history"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-level hds-down hds-alternate"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-level hds-up hds-alternate"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-location hds-arrow"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-long hds-arrow hds-alternate hds-down"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-long hds-arrow hds-alternate hds-left"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-long hds-arrow hds-alternate hds-right"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-long hds-arrow hds-alternate hds-up"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-mouse hds-pointer"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-play"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-random"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-recycle"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-redo"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-redo hds-alternate"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-reply"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-reply hds-all"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-retweet"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-share"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-share hds-square"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-share hds-square hds-outline"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-sign hds-in hds-alternate"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-sign hds-out hds-alternate"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-sort"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-sort hds-alphabet hds-down"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-sort hds-alphabet hds-up"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-sort hds-amount hds-down"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-sort hds-amount hds-up"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-sort hds-down"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-sort hds-numeric hds-down"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-sort hds-numeric hds-up"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-sort hds-up"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-sync"&gt;&lt;/hds-icon.&gt;
            &lt;hds-icon size="big" name="hds-sync hds-alternate"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-text hds-height"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-text hds-width"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-undo"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-undo hds-alternate"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon size="big" name="hds-upload"&gt;&lt;/hds-icon&gt;
          </prism>
        </template>
      </hds-segment>
      <hds-segment title="Audio & Video" description="Icons can be used to represent common ways to interact with audio and video">
        <hds-grid cols="6">
          <hds-column><hds-icon size="big" name="hds-audio hds-description"></hds-icon> <br/> <br/> <div class="hds-label">audio hds-description</div></hds-column>
          <hds-column><hds-icon size="big" name="hds-backward"></hds-icon> <br/> <br/> <div class="hds-label">backward</div></hds-column>
          <hds-column><hds-icon size="big" name="hds-circle"></hds-icon> <br/> <br/> <div class="hds-label">circle</div></hds-column>
          <hds-column><hds-icon size="big" name="hds-circle hds-outline"></hds-icon> <br/> <br/> <div class="hds-label">circle hds-outline</div></hds-column>
          <hds-column><hds-icon size="big" name="hds-closed hds-captioning"></hds-icon> <br/> <br/> <div class="hds-label">closed hds-captioning</div></hds-column>
          <hds-column><hds-icon size="big" name="hds-closed hds-captioning hds-outline"></hds-icon> <br/> <br/> <div class="hds-label">closed hds-captioning hds-outline</div></hds-column>
          <hds-column><hds-icon size="big" name="hds-compress"></hds-icon> <br/> <br/> <div class="hds-label">compress</div></hds-column>
          <hds-column><hds-icon size="big" name="hds-eject"></hds-icon> <br/> <br/> <div class="hds-label">eject</div></hds-column>
          <hds-column><hds-icon size="big" name="hds-expand"></hds-icon> <br/> <br/> <div class="hds-label">expand</div></hds-column>
          <hds-column><hds-icon size="big" name="hds-expand hds-arrows hds-alternate"></hds-icon> <br/> <br/> <div class="hds-label">expand hds-arrows hds-alternate</div></hds-column>
          <hds-column><hds-icon size="big" name="hds-fast hds-backward"></hds-icon> <br/> <br/> <div class="hds-label">fast hds-backward</div></hds-column>
          <hds-column><hds-icon size="big" name="hds-fast hds-forward"></hds-icon> <br/> <br/> <div class="hds-label">fast hds-forward</div></hds-column>
          <hds-column><hds-icon size="big" name="hds-file hds-audio"></hds-icon> <br/> <br/> <div class="hds-label">file hds-audio</div></hds-column>
          <hds-column><hds-icon size="big" name="hds-file hds-audio hds-outline"></hds-icon> <br/> <br/> <div class="hds-label">file hds-audio hds-outline</div></hds-column>
          <hds-column><hds-icon size="big" name="hds-file hds-video"></hds-icon> <br/> <br/> <div class="hds-label">file hds-video</div></hds-column>
          <hds-column><hds-icon size="big" name="hds-file hds-video hds-outline"></hds-icon> <br/> <br/> <div class="hds-label">file hds-video hds-outline</div></hds-column>
          <hds-column><hds-icon size="big" name="hds-film"></hds-icon> <br/> <br/> <div class="hds-label">film</div></hds-column>
          <hds-column><hds-icon size="big" name="hds-forward"></hds-icon> <br/> <br/> <div class="hds-label">forward</div></hds-column>
          <hds-column><hds-icon size="big" name="hds-headphones"></hds-icon> <br/> <br/> <div class="hds-label">headphones</div></hds-column>
          <hds-column><hds-icon size="big" name="hds-microphone"></hds-icon> <br/> <br/> <div class="hds-label">microphone</div></hds-column>
          <hds-column><hds-icon size="big" name="hds-microphone hds-slash"></hds-icon> <br/> <br/> <div class="hds-label">microphone hds-slash</div></hds-column>
          <hds-column><hds-icon size="big" name="hds-music"></hds-icon> <br/> <br/> <div class="hds-label">music</div></hds-column>
          <hds-column><hds-icon size="big" name="hds-pause"></hds-icon> <br/> <br/> <div class="hds-label">pause</div></hds-column>
          <hds-column><hds-icon size="big" name="hds-pause hds-circle"></hds-icon> <br/> <br/> <div class="hds-label">pause hds-circle</div></hds-column>
          <hds-column><hds-icon size="big" name="hds-pause hds-circle hds-outline"></hds-icon> <br/> <br/> <div class="hds-label">pause hds-circle hds-outline</div></hds-column>
          <hds-column><hds-icon size="big" name="hds-phone hds-volume"></hds-icon> <br/> <br/> <div class="hds-label">phone hds-volume</div></hds-column>
          <hds-column><hds-icon size="big" name="hds-play"></hds-icon> <br/> <br/> <div class="hds-label">play</div></hds-column>
          <hds-column><hds-icon size="big" name="hds-play hds-circle"></hds-icon> <br/> <br/> <div class="hds-label">play hds-circle</div></hds-column>
          <hds-column><hds-icon size="big" name="hds-play hds-circle hds-outline"></hds-icon> <br/> <br/> <div class="hds-label">play hds-circle hds-outline</div></hds-column>
          <hds-column><hds-icon size="big" name="hds-podcast"></hds-icon> <br/> <br/> <div class="hds-label">podcast</div></hds-column>
          <hds-column><hds-icon size="big" name="hds-random"></hds-icon> <br/> <br/> <div class="hds-label">random</div></hds-column>
          <hds-column><hds-icon size="big" name="hds-redo"></hds-icon> <br/> <br/> <div class="hds-label">redo</div></hds-column>
          <hds-column><hds-icon size="big" name="hds-redo hds-alternate"></hds-icon> <br/> <br/> <div class="hds-label">redo hds-alternate</div></hds-column>
          <hds-column><hds-icon size="big" name="hds-rss"></hds-icon> <br/> <br/> <div class="hds-label">rss</div></hds-column>
          <hds-column><hds-icon size="big" name="hds-rss hds-square"></hds-icon> <br/> <br/> <div class="hds-label">rss hds-square</div></hds-column>
          <hds-column><hds-icon size="big" name="hds-step hds-backward"></hds-icon> <br/> <br/> <div class="hds-label">step hds-backward</div></hds-column>
          <hds-column><hds-icon size="big" name="hds-step hds-forward"></hds-icon> <br/> <br/> <div class="hds-label">step hds-forward</div></hds-column>
          <hds-column><hds-icon size="big" name="hds-stop"></hds-icon> <br/> <br/> <div class="hds-label">stop</div></hds-column>
          <hds-column><hds-icon size="big" name="hds-stop hds-circle"></hds-icon> <br/> <br/> <div class="hds-label">stop hds-circle</div></hds-column>
          <hds-column><hds-icon size="big" name="hds-stop hds-circle hds-outline"></hds-icon> <br/> <br/> <div class="hds-label">stop hds-circle hds-outline</div></hds-column>
          <hds-column><hds-icon size="big" name="hds-sync"></hds-icon> <br/> <br/> <div class="hds-label">sync</div></hds-column>
          <hds-column><hds-icon size="big" name="hds-sync hds-alternate"></hds-icon> <br/> <br/> <div class="hds-label">sync hds-alternate</div></hds-column>
          <hds-column><hds-icon size="big" name="hds-undo"></hds-icon> <br/> <br/> <div class="hds-label">undo</div></hds-column>
          <hds-column><hds-icon size="big" name="hds-undo hds-alternate"></hds-icon> <br/> <br/> <div class="hds-label">undo hds-alternate</div></hds-column>
          <hds-column><hds-icon size="big" name="hds-video"></hds-icon> <br/> <br/> <div class="hds-label">video</div></hds-column>
          <hds-column><hds-icon size="big" name="hds-volume hds-down"></hds-icon> <br/> <br/> <div class="hds-label">volume hds-down</div></hds-column>
          <hds-column><hds-icon size="big" name="hds-volume hds-off"></hds-icon> <br/> <br/> <div class="hds-label">volume hds-off</div></hds-column>
          <hds-column><hds-icon size="big" name="hds-volume hds-up"></hds-icon> <br/> <br/> <div class="hds-label">volume hds-up</div></hds-column>
        </hds-grid>
        <template name="actions">
          <prism language="html">
            &lt;hds-icon name="hds-audio hds-description"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-backward"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-circle"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-circle hds-outline"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-closed hds-captioning"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-closed hds-captioning hds-outline"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-compress"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-eject"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-expand"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-expand hds-arrows hds-alternate"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-fast hds-backward"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-fast hds-forward"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-file hds-audio"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-file hds-audio hds-outline"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-file hds-video"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-file hds-video hds-outline"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-film"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-forward"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-headphones"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-microphone"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-microphone hds-slash"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-music"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-pause"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-pause hds-circle"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-pause hds-circle hds-outline"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-phone hds-volume"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-play"&gt;&lt;/hds-icon&gt;play
            &lt;hds-icon name="hds-play hds-circle"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-play hds-circle hds-outline"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-podcast"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-random"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-redo"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-redo hds-alternate"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-rss"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-rss hds-square"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-step hds-backward"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-step hds-forward"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-stop"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-stop hds-circle"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-stop hds-circle hds-outline"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-sync"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-sync hds-alternate"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-undo"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-undo hds-alternate"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-video"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-volume hds-down"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-volume hds-off"&gt;&lt;/hds-icon&gt;
            &lt;hds-icon name="hds-volume hds-up"&gt;&lt;/hds-icon&gt;
          </prism>
        </template>
      </hds-segment>
      <hds-segment title="Business" description="Icons can be used to represent business and common business actions">
        <hds-grid cols="6">
          <hds-column> <hds-icon size="big" name="hds-address hds-book"></hds-icon> <br/> <br/> <div class="hds-label"> address book </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-address hds-book hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> address book outline </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-address hds-card"></hds-icon> <br/> <br/> <div class="hds-label"> address card </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-address hds-card hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> address card outline </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-archive"></hds-icon> <br/> <br/> <div class="hds-label"> archive </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-balance hds-scale"></hds-icon> <br/> <br/> <div class="hds-label"> balance scale </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-birthday hds-cake"></hds-icon> <br/> <br/> <div class="hds-label"> birthday cake </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-book"></hds-icon> <br/> <br/> <div class="hds-label"> book </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-briefcase"></hds-icon> <br/> <br/> <div class="hds-label"> briefcase </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-building"></hds-icon> <br/> <br/> <div class="hds-label"> building </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-building hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> building outline </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-bullhorn"></hds-icon> <br/> <br/> <div class="hds-label"> bullhorn </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-bullseye"></hds-icon> <br/> <br/> <div class="hds-label"> bullseye </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-calculator"></hds-icon> <br/> <br/> <div class="hds-label"> calculator </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-calendar"></hds-icon> <br/> <br/> <div class="hds-label"> calendar </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-calendar hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> calendar outline </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-calendar hds-alternate"></hds-icon> <br/> <br/> <div class="hds-label"> calendar alternate </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-calendar hds-alternate hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> calendar alternate outline </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-certificate"></hds-icon> <br/> <br/> <div class="hds-label"> certificate </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-chart hds-area"></hds-icon> <br/> <br/> <div class="hds-label"> chart area </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-chart hds-bar"></hds-icon> <br/> <br/> <div class="hds-label"> chart bar </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-chart hds-bar hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> chart bar outline </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-chart hds-line"></hds-icon> <br/> <br/> <div class="hds-label"> chart line </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-chart hds-pie"></hds-icon> <br/> <br/> <div class="hds-label"> chart pie </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-clipboard"></hds-icon> <br/> <br/> <div class="hds-label"> clipboard </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-clipboard hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> clipboard outline </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-coffee"></hds-icon> <br/> <br/> <div class="hds-label"> coffee </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-columns"></hds-icon> <br/> <br/> <div class="hds-label"> columns </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-compass"></hds-icon> <br/> <br/> <div class="hds-label"> compass </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-compass hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> compass outline </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-copy"></hds-icon> <br/> <br/> <div class="hds-label"> copy </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-copy hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> copy outline </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-copyright"></hds-icon> <br/> <br/> <div class="hds-label"> copyright </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-copyright hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> copyright outline </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-cut"></hds-icon> <br/> <br/> <div class="hds-label"> cut </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-edit"></hds-icon> <br/> <br/> <div class="hds-label"> edit </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-edit hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> edit outline </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-envelope"></hds-icon> <br/> <br/> <div class="hds-label"> envelope </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-envelope hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> envelope outline </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-envelope hds-open"></hds-icon> <br/> <br/> <div class="hds-label"> envelope open </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-envelope hds-open hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> envelope open outline </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-envelope hds-square"></hds-icon> <br/> <br/> <div class="hds-label"> envelope square </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-eraser"></hds-icon> <br/> <br/> <div class="hds-label"> eraser </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-fax"></hds-icon> <br/> <br/> <div class="hds-label"> fax </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-file"></hds-icon> <br/> <br/> <div class="hds-label"> file </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-file hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> file outline </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-file hds-alternate"></hds-icon> <br/> <br/> <div class="hds-label"> file alternate </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-file hds-alternate hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> file alternate outline </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-folder"></hds-icon> <br/> <br/> <div class="hds-label"> folder </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-folder hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> folder outline </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-folder hds-open"></hds-icon> <br/> <br/> <div class="hds-label"> folder open </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-folder hds-open hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> folder open outline </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-globe"></hds-icon> <br/> <br/> <div class="hds-label"> globe </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-industry"></hds-icon> <br/> <br/> <div class="hds-label"> industry </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-paperclip"></hds-icon> <br/> <br/> <div class="hds-label"> paperclip </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-paste"></hds-icon> <br/> <br/> <div class="hds-label"> paste </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-pen hds-square"></hds-icon> <br/> <br/> <div class="hds-label"> pen square </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-pencil hds-alternate"></hds-icon> <br/> <br/> <div class="hds-label"> pencil alternate </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-percent"></hds-icon> <br/> <br/> <div class="hds-label"> percent </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-phone"></hds-icon> <br/> <br/> <div class="hds-label"> phone </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-phone hds-square"></hds-icon> <br/> <br/> <div class="hds-label"> phone square </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-phone hds-volume"></hds-icon> <br/> <br/> <div class="hds-label"> phone volume </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-registered"></hds-icon> <br/> <br/> <div class="hds-label"> registered </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-registered hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> registered outline </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-save"></hds-icon> <br/> <br/> <div class="hds-label"> save </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-save hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> save outline </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-sitemap"></hds-icon> <br/> <br/> <div class="hds-label"> sitemap </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-sticky hds-note"></hds-icon> <br/> <br/> <div class="hds-label"> sticky note </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-sticky hds-note hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> sticky note outline </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-suitcase"></hds-icon> <br/> <br/> <div class="hds-label"> suitcase </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-table"></hds-icon> <br/> <br/> <div class="hds-label"> table </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-tag"></hds-icon> <br/> <br/> <div class="hds-label"> tag </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-tags"></hds-icon> <br/> <br/> <div class="hds-label"> tags </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-tasks"></hds-icon> <br/> <br/> <div class="hds-label"> tasks </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-thumbtack"></hds-icon> <br/> <br/> <div class="hds-label"> thumbtack </div> </hds-column>
          <hds-column> <hds-icon size="big" name="hds-trademark"></hds-icon> <br/> <br/> <div class="hds-label"> trademark </div> </hds-column>

        </hds-grid>
        <prism language="javascript">
          export default {
            name: 'HDSIcon'
          }
        </prism>
      </hds-segment>
      <hds-segment title="Chess" description="Icons which represent the game chess"> 
        <hds-grid cols="6">
          <hds-column><hds-icon size="big" name="hds-chess"></hds-icon> <br/> <br/> <div class="hds-label"> chess </div></hds-column>
          <hds-column><hds-icon size="big" name="hds-chess hds-bishop"></hds-icon> <br/> <br/> <div class="hds-label"> chess bishop </div></hds-column>
          <hds-column><hds-icon size="big" name="hds-chess hds-board"></hds-icon> <br/> <br/> <div class="hds-label"> chess board </div></hds-column>
          <hds-column><hds-icon size="big" name="hds-chess hds-king"></hds-icon> <br/> <br/> <div class="hds-label"> chess king </div></hds-column>
          <hds-column><hds-icon size="big" name="hds-chess hds-knight"></hds-icon> <br/> <br/> <div class="hds-label"> chess knight </div></hds-column>
          <hds-column><hds-icon size="big" name="hds-chess hds-pawn"></hds-icon> <br/> <br/> <div class="hds-label"> chess pawn </div></hds-column>
          <hds-column><hds-icon size="big" name="hds-chess hds-queen"></hds-icon> <br/> <br/> <div class="hds-label"> chess queen </div></hds-column>
          <hds-column><hds-icon size="big" name="hds-chess hds-rook"></hds-icon> <br/> <br/> <div class="hds-label"> chess rook </div></hds-column>
          <hds-column><hds-icon size="big" name="hds-square hds-full"></hds-icon> <br/> <br/> <div class="hds-label"> square full </div></hds-column>
        </hds-grid> 
      </hds-segment>
      <hds-segment title="Code" description="Icons can represent programming and programming tools"> 
        <hds-grid cols="6">
          <hds-column><hds-icon size="big" name="hds-archive"></hds-icon> <br/> <br/> <div class="hds-label"> archive </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-barcode"></hds-icon> <br/> <br/> <div class="hds-label"> barcode </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-bath"></hds-icon> <br/> <br/> <div class="hds-label"> bath </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-bug"></hds-icon> <br/> <br/> <div class="hds-label"> bug </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-code"></hds-icon> <br/> <br/> <div class="hds-label"> code </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-code hds-branch"></hds-icon> <br/> <br/> <div class="hds-label"> code branch </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-coffee"></hds-icon> <br/> <br/> <div class="hds-label"> coffee </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-file"></hds-icon> <br/> <br/> <div class="hds-label"> file </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-file hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> file outline </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-file hds-alternate"></hds-icon> <br/> <br/> <div class="hds-label"> file alternate </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-file hds-alternate hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> file alternate outline </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-file hds-code"></hds-icon> <br/> <br/> <div class="hds-label"> file code </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-file hds-code hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> file code outline </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-filter"></hds-icon> <br/> <br/> <div class="hds-label"> filter </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-fire hds-extinguisher"></hds-icon> <br/> <br/> <div class="hds-label"> fire extinguisher </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-folder"></hds-icon> <br/> <br/> <div class="hds-label"> folder </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-folder hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> folder outline </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-folder hds-open"></hds-icon> <br/> <br/> <div class="hds-label"> folder open </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-folder hds-open hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> folder open outline </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-keyboard"></hds-icon> <br/> <br/> <div class="hds-label"> keyboard </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-keyboard hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> keyboard outline </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-microchip"></hds-icon> <br/> <br/> <div class="hds-label"> microchip </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-qrcode"></hds-icon> <br/> <br/> <div class="hds-label"> qrcode </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-shield hds-alternate"></hds-icon> <br/> <br/> <div class="hds-label"> shield alternate </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-sitemap"></hds-icon> <br/> <br/> <div class="hds-label"> sitemap </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-terminal"></hds-icon> <br/> <br/> <div class="hds-label"> terminal </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-user hds-secret"></hds-icon> <br/> <br/> <div class="hds-label"> user secret </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-window hds-close"></hds-icon> <br/> <br/> <div class="hds-label"> window close </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-window hds-close hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> window close outline </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-window hds-maximize"></hds-icon> <br/> <br/> <div class="hds-label"> window maximize </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-window hds-maximize hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> window maximize outline </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-window hds-minimize"></hds-icon> <br/> <br/> <div class="hds-label"> window minimize </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-window hds-minimize hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> window minimize outline </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-window hds-restore"></hds-icon> <br/> <br/> <div class="hds-label"> window restore </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-window hds-restore hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> window restore outline </div> </hds-column>
        </hds-grid> 
      </hds-segment>
      <hds-segment title="Communication" description="Icons which represent common ways of communication"> 
        <hds-grid cols="6">
          <hds-column><hds-icon size="big" name="hds-address hds-book"></hds-icon> <br/> <br/> <div class="hds-label"> address book </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-address hds-book hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> address book outline </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-address hds-card"></hds-icon> <br/> <br/> <div class="hds-label"> address card </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-address hds-card hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> address card outline </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-american hds-sign hds-language hds-interpreting"></hds-icon> <br/> <br/> <div class="hds-label"> american sign language interpreting </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-assistive hds-listening hds-systems"></hds-icon> <br/> <br/> <div class="hds-label"> assistive listening systems </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-at"></hds-icon> <br/> <br/> <div class="hds-label"> at </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-bell"></hds-icon> <br/> <br/> <div class="hds-label"> bell </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-bell hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> bell outline </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-bell hds-slash"></hds-icon> <br/> <br/> <div class="hds-label"> bell slash </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-bell hds-slash hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> bell slash outline </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-bullhorn"></hds-icon> <br/> <br/> <div class="hds-label"> bullhorn </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-comment"></hds-icon> <br/> <br/> <div class="hds-label"> comment </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-comment hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> comment outline </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-comment hds-alternate"></hds-icon> <br/> <br/> <div class="hds-label"> comment alternate </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-comment hds-alternate hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> comment alternate outline </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-comments"></hds-icon> <br/> <br/> <div class="hds-label"> comments </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-comments hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> comments outline </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-envelope"></hds-icon> <br/> <br/> <div class="hds-label"> envelope </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-envelope hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> envelope outline </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-envelope hds-open"></hds-icon> <br/> <br/> <div class="hds-label"> envelope open </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-envelope hds-open hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> envelope open outline </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-envelope hds-square"></hds-icon> <br/> <br/> <div class="hds-label"> envelope square </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-fax"></hds-icon> <br/> <br/> <div class="hds-label"> fax </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-inbox"></hds-icon> <br/> <br/> <div class="hds-label"> inbox </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-language"></hds-icon> <br/> <br/> <div class="hds-label"> language </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-microphone"></hds-icon> <br/> <br/> <div class="hds-label"> microphone </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-microphone hds-slash"></hds-icon> <br/> <br/> <div class="hds-label"> microphone slash </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-mobile"></hds-icon> <br/> <br/> <div class="hds-label"> mobile </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-mobile hds-alternate"></hds-icon> <br/> <br/> <div class="hds-label"> mobile alternate </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-paper hds-plane"></hds-icon> <br/> <br/> <div class="hds-label"> paper plane </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-paper hds-plane hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> paper plane outline </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-phone"></hds-icon> <br/> <br/> <div class="hds-label"> phone </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-phone hds-square"></hds-icon> <br/> <br/> <div class="hds-label"> phone square </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-phone hds-volume"></hds-icon> <br/> <br/> <div class="hds-label"> phone volume </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-rss"></hds-icon> <br/> <br/> <div class="hds-label"> rss </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-rss hds-square"></hds-icon> <br/> <br/> <div class="hds-label"> rss square </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-tty"></hds-icon> <br/> <br/> <div class="hds-label"> tty </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-wifi"></hds-icon> <br/> <br/> <div class="hds-label"> wifi </div> </hds-column>
        </hds-grid> 
      </hds-segment>
      <hds-segment title="Computers" description="Icons can represent computing devices, or types of content found on a computer"> 
        <hds-grid cols="6">
          <hds-column><hds-icon size="big" name="hds-desktop"></hds-icon> <br/> <br/> <div class="hds-label"> desktop </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-download"></hds-icon> <br/> <br/> <div class="hds-label"> download </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-hdd"></hds-icon> <br/> <br/> <div class="hds-label"> hdd </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-hdd hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> hdd outline </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-headphones"></hds-icon> <br/> <br/> <div class="hds-label"> headphones </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-keyboard"></hds-icon> <br/> <br/> <div class="hds-label"> keyboard </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-keyboard hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> keyboard outline </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-laptop"></hds-icon> <br/> <br/> <div class="hds-label"> laptop </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-microchip"></hds-icon> <br/> <br/> <div class="hds-label"> microchip </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-mobile"></hds-icon> <br/> <br/> <div class="hds-label"> mobile </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-mobile hds-alternate"></hds-icon> <br/> <br/> <div class="hds-label"> mobile alternate </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-plug"></hds-icon> <br/> <br/> <div class="hds-label"> plug </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-power hds-off"></hds-icon> <br/> <br/> <div class="hds-label"> power off </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-print"></hds-icon> <br/> <br/> <div class="hds-label"> print </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-save"></hds-icon> <br/> <br/> <div class="hds-label"> save </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-save hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> save outline </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-server"></hds-icon> <br/> <br/> <div class="hds-label"> server </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-tablet"></hds-icon> <br/> <br/> <div class="hds-label"> tablet </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-tablet hds-alternate"></hds-icon> <br/> <br/> <div class="hds-label"> tablet alternate </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-tv"></hds-icon> <br/> <br/> <div class="hds-label"> tv </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-upload"></hds-icon> <br/> <br/> <div class="hds-label"> upload </div> </hds-column>
        </hds-grid> 
      </hds-segment>
      <hds-segment title="Currency" description="Icons can represent units of currency"> 
        <hds-grid cols="6">
          <hds-column><hds-icon size="big" name="hds-dollar hds-sign"></hds-icon> <br/> <br/> <div class="hds-label"> dollar sign </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-euro hds-sign"></hds-icon> <br/> <br/> <div class="hds-label"> euro sign </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-lira hds-sign"></hds-icon> <br/> <br/> <div class="hds-label"> lira sign </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-money hds-bill hds-alternate"></hds-icon> <br/> <br/> <div class="hds-label"> money bill alternate </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-money hds-bill hds-alternate hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> money bill alternate outline </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-pound hds-sign"></hds-icon> <br/> <br/> <div class="hds-label"> pound sign </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-ruble hds-sign"></hds-icon> <br/> <br/> <div class="hds-label"> ruble sign </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-rupee hds-sign"></hds-icon> <br/> <br/> <div class="hds-label"> rupee sign </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-shekel hds-sign"></hds-icon> <br/> <br/> <div class="hds-label"> shekel sign </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-won hds-sign"></hds-icon> <br/> <br/> <div class="hds-label"> won sign </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-yen hds-sign"></hds-icon> <br/> <br/> <div class="hds-label"> yen sign </div> </hds-column>
        </hds-grid> 
      </hds-segment>
      <hds-segment title="Date & Time" description="Icons that represent common ways of showing date and time"> 
        <hds-grid cols="6">
          <hds-column><hds-icon size="big" name="hds-bell"></hds-icon> <br/> <br/> <div class="hds-label"> bell </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-bell hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> bell outline </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-bell hds-slash"></hds-icon> <br/> <br/> <div class="hds-label"> bell slash </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-bell hds-slash hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> bell slash outline </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-calendar"></hds-icon> <br/> <br/> <div class="hds-label"> calendar </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-calendar hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> calendar outline </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-calendar hds-alternate"></hds-icon> <br/> <br/> <div class="hds-label"> calendar alternate </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-calendar hds-alternate hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> calendar alternate outline </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-calendar hds-check"></hds-icon> <br/> <br/> <div class="hds-label"> calendar check </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-calendar hds-check hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> calendar check outline </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-calendar hds-minus"></hds-icon> <br/> <br/> <div class="hds-label"> calendar minus </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-calendar hds-minus hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> calendar minus outline </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-calendar hds-plus"></hds-icon> <br/> <br/> <div class="hds-label"> calendar plus </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-calendar hds-plus hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> calendar plus outline </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-calendar hds-times"></hds-icon> <br/> <br/> <div class="hds-label"> calendar times </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-calendar hds-times hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> calendar times outline </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-clock"></hds-icon> <br/> <br/> <div class="hds-label"> clock </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-clock hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> clock outline </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-hourglass"></hds-icon> <br/> <br/> <div class="hds-label"> hourglass </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-hourglass hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> hourglass outline </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-hourglass hds-end"></hds-icon> <br/> <br/> <div class="hds-label"> hourglass end </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-hourglass hds-half"></hds-icon> <br/> <br/> <div class="hds-label"> hourglass half </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-hourglass hds-start"></hds-icon> <br/> <br/> <div class="hds-label"> hourglass start </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-stopwatch"></hds-icon> <br/> <br/> <div class="hds-label"> stopwatch </div> </hds-column>
        </hds-grid> 
      </hds-segment>
      <hds-segment title="Design" description="Icons can represent common design related symbols or techniques"> 
        <hds-grid cols="6">
          <hds-column><hds-icon size="big" name="hds-adjust"></hds-icon> <br/> <br/> <div class="hds-label"> adjust </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-clone"></hds-icon> <br/> <br/> <div class="hds-label"> clone </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-clone hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> clone outline </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-copy"></hds-icon> <br/> <br/> <div class="hds-label"> copy </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-copy hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> copy outline </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-crop"></hds-icon> <br/> <br/> <div class="hds-label"> crop </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-crosshairs"></hds-icon> <br/> <br/> <div class="hds-label"> crosshairs </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-cut"></hds-icon> <br/> <br/> <div class="hds-label"> cut </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-edit"></hds-icon> <br/> <br/> <div class="hds-label"> edit </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-edit hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> edit outline </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-eraser"></hds-icon> <br/> <br/> <div class="hds-label"> eraser </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-eye"></hds-icon> <br/> <br/> <div class="hds-label"> eye </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-eye hds-dropper"></hds-icon> <br/> <br/> <div class="hds-label"> eye dropper </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-eye hds-slash"></hds-icon> <br/> <br/> <div class="hds-label"> eye slash </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-eye hds-slash hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> eye slash outline </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-object hds-group"></hds-icon> <br/> <br/> <div class="hds-label"> object group </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-object hds-group hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> object group outline </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-object hds-ungroup"></hds-icon> <br/> <br/> <div class="hds-label"> object ungroup </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-object hds-ungroup hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> object ungroup outline </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-paint hds-brush"></hds-icon> <br/> <br/> <div class="hds-label"> paint brush </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-paste"></hds-icon> <br/> <br/> <div class="hds-label"> paste </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-pencil hds-alternate"></hds-icon> <br/> <br/> <div class="hds-label"> pencil alternate </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-save"></hds-icon> <br/> <br/> <div class="hds-label"> save </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-save hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> save outline </div> </hds-column>
          <hds-column><hds-icon size="big" name="hds-tint"></hds-icon> <br/> <br/> <div class="hds-label"> tint </div> </hds-column>
        </hds-grid> 
      </hds-segment>
      <hds-segment title="Editors" description="Icons can represent text editors and common editor actions"> 
        <hds-grid cols="6">
          <hds-column>  <hds-icon size="big" name="hds-align hds-center"></hds-icon> <br/> <br/> <div class="hds-label"> align center </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-align hds-justify"></hds-icon> <br/> <br/> <div class="hds-label"> align justify </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-align hds-left"></hds-icon> <br/> <br/> <div class="hds-label"> align left </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-align hds-right"></hds-icon> <br/> <br/> <div class="hds-label"> align right </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-bold"></hds-icon> <br/> <br/> <div class="hds-label"> bold </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-clipboard"></hds-icon> <br/> <br/> <div class="hds-label"> clipboard </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-clipboard hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> clipboard outline </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-clone"></hds-icon> <br/> <br/> <div class="hds-label"> clone </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-clone hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> clone outline </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-columns"></hds-icon> <br/> <br/> <div class="hds-label"> columns </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-copy"></hds-icon> <br/> <br/> <div class="hds-label"> copy </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-copy hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> copy outline </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-cut"></hds-icon> <br/> <br/> <div class="hds-label"> cut </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-edit"></hds-icon> <br/> <br/> <div class="hds-label"> edit </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-edit hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> edit outline </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-eraser"></hds-icon> <br/> <br/> <div class="hds-label"> eraser </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-file"></hds-icon> <br/> <br/> <div class="hds-label"> file </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-file hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> file outline </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-file hds-alternate"></hds-icon> <br/> <br/> <div class="hds-label"> file alternate </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-file hds-alternate hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> file alternate outline </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-font"></hds-icon> <br/> <br/> <div class="hds-label"> font </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-heading"></hds-icon> <br/> <br/> <div class="hds-label"> heading </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-i hds-cursor"></hds-icon> <br/> <br/> <div class="hds-label"> i cursor </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-indent"></hds-icon> <br/> <br/> <div class="hds-label"> indent </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-italic"></hds-icon> <br/> <br/> <div class="hds-label"> italic </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-linkify"></hds-icon> <br/> <br/> <div class="hds-label"> linkify </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-list"></hds-icon> <br/> <br/> <div class="hds-label"> list </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-list hds-alternate"></hds-icon> <br/> <br/> <div class="hds-label"> list alternate </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-list hds-alternate hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> list alternate outline </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-list hds-ol"></hds-icon> <br/> <br/> <div class="hds-label"> list ol </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-list hds-ul"></hds-icon> <br/> <br/> <div class="hds-label"> list ul </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-outdent"></hds-icon> <br/> <br/> <div class="hds-label"> outdent </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-paper hds-plane"></hds-icon> <br/> <br/> <div class="hds-label"> paper plane </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-paper hds-plane hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> paper plane outline </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-paperclip"></hds-icon> <br/> <br/> <div class="hds-label"> paperclip </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-paragraph"></hds-icon> <br/> <br/> <div class="hds-label"> paragraph </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-paste"></hds-icon> <br/> <br/> <div class="hds-label"> paste </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-pencil hds-alternate"></hds-icon> <br/> <br/> <div class="hds-label"> pencil alternate </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-print"></hds-icon> <br/> <br/> <div class="hds-label"> print </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-quote hds-left"></hds-icon> <br/> <br/> <div class="hds-label"> quote left </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-quote hds-right"></hds-icon> <br/> <br/> <div class="hds-label"> quote right </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-redo"></hds-icon> <br/> <br/> <div class="hds-label"> redo </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-redo hds-alternate"></hds-icon> <br/> <br/> <div class="hds-label"> redo alternate </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-reply"></hds-icon> <br/> <br/> <div class="hds-label"> reply </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-reply hds-all"></hds-icon> <br/> <br/> <div class="hds-label"> reply all </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-share"></hds-icon> <br/> <br/> <div class="hds-label"> share </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-strikethrough"></hds-icon> <br/> <br/> <div class="hds-label"> strikethrough </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-subscript"></hds-icon> <br/> <br/> <div class="hds-label"> subscript </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-superscript"></hds-icon> <br/> <br/> <div class="hds-label"> superscript </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-sync"></hds-icon> <br/> <br/> <div class="hds-label"> sync </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-sync hds-alternate"></hds-icon> <br/> <br/> <div class="hds-label"> sync alternate </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-table"></hds-icon> <br/> <br/> <div class="hds-label"> table </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-tasks"></hds-icon> <br/> <br/> <div class="hds-label"> tasks </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-text hds-height"></hds-icon> <br/> <br/> <div class="hds-label"> text height </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-text hds-width"></hds-icon> <br/> <br/> <div class="hds-label"> text width </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-th"></hds-icon> <br/> <br/> <div class="hds-label"> th </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-th hds-large"></hds-icon> <br/> <br/> <div class="hds-label"> th large </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-th hds-list"></hds-icon> <br/> <br/> <div class="hds-label"> th list </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-trash"></hds-icon> <br/> <br/> <div class="hds-label"> trash </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-trash hds-alternate"></hds-icon> <br/> <br/> <div class="hds-label"> trash alternate </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-trash hds-alternate hds-outline"></hds-icon> <br/> <br/> <div class="hds-label"> trash alternate outline </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-underline"></hds-icon> <br/> <br/> <div class="hds-label"> underline </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-undo"></hds-icon> <br/> <br/> <div class="hds-label"> undo </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-undo hds-alternate"></hds-icon> <br/> <br/> <div class="hds-label"> undo alternate </div> </hds-column>
            <hds-column><hds-icon size="big" name="hds-unlink"></hds-icon> <br/> <br/> <div class="hds-label"> unlink </div> </hds-column>
        </hds-grid> 
      </hds-segment>
      <hds-segment title="Files" description="Icons can represent elements of a computer and its file system"> 
        <hds-grid cols="6">
          
        </hds-grid> 
      </hds-segment>
      <hds-segment title="Genders" description="Icons can represent genders or types of sexuality"> 
        <hds-grid cols="6">
          
        </hds-grid> 
      </hds-segment>
      <hds-segment title="Hands & Gestures" description="Icons can represent hand signals and gestures"> 
        <hds-grid cols="6">
          
        </hds-grid> 
      </hds-segment>
      <hds-segment title="Health" description="Icons which represent common health symbols"> 
        <hds-grid cols="6">
          
        </hds-grid> 
      </hds-segment>
      <hds-segment title="Images" description="Icons that represent common image symbols and actions"> 
        <hds-grid cols="6">
          
        </hds-grid> 
      </hds-segment>
      <hds-segment title="Interfaces" description="Icons can represent common actions a user can take or use"> 
        <hds-grid cols="6">
          
        </hds-grid> 
      </hds-segment>
      <hds-segment title="Logistics" description="Icons can represent common logistic activity"> 
        <hds-grid cols="6">
          
        </hds-grid> 
      </hds-segment>
      <hds-segment title="Maps" description="Icons can be used to represent elements on a map"> 
        <hds-grid cols="6">
          
        </hds-grid> 
      </hds-segment>
      <hds-segment title="Medical" description="Icons can represent common medical actions"> 
        <hds-grid cols="6">
          
        </hds-grid> 
      </hds-segment>
      <hds-segment title="Objects" description="Icons can be used to represent common objects"> 
        <hds-grid cols="6">
          
        </hds-grid> 
      </hds-segment>
      <hds-segment title="Payments & Shopping" description="Icons can represent common forms of payment and shopping actions"> 
        <hds-grid cols="6">
          
        </hds-grid> 
      </hds-segment>
      <hds-segment title="Shapes" description="Icons can be used to create shapes"> 
        <hds-grid cols="6">
          
        </hds-grid> 
      </hds-segment>
      <hds-segment title="Spinners" description="Icons can represent loading"> 
        <hds-grid cols="6">
          
        </hds-grid> 
      </hds-segment>
      <hds-segment title="Sports" description="Icons which represent sports"> 
        <hds-grid cols="6">
          
        </hds-grid> 
      </hds-segment>
      <hds-segment title="Status" description="Icons can represent different states"> 
        <hds-grid cols="6">
          
        </hds-grid> 
      </hds-segment>
      <hds-segment title="User & People" description="Icons can represent users or people"> 
        <hds-grid cols="6">
          
        </hds-grid> 
      </hds-segment>
      <hds-segment title="Vehicle" description="Icons can represent vehicles or transport"> 
        <hds-grid cols="6">
          
        </hds-grid> 
      </hds-segment>
      <hds-segment title="Writing" description="Icons can represent writing and editing"> 
        <hds-grid cols="6">
          
        </hds-grid> 
      </hds-segment>
      <hds-segment title="Brands" description="Icons can represent logos to common brands"> 
        <hds-grid cols="6">
          
        </hds-grid> 
      </hds-segment>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HDSIconDemo'
}
</script>
<style scoped>
  .hds-column{
    text-align: center;
  }
  .hds-label {
    background-color: white;
  }
</style>