<template>
  <div>
    <hds-component-header title="Flex Grid"></hds-component-header>
    <div style="padding: 2rem;">
      
      <div class="hds-segments">
        <article class="hds-segment">
          <hds-header title="Basic Grid" dividing="true"></hds-header>
          <hds-grid cols="6">
            <hds-column>
              <div class="hds-segment">
                <div class="hds-fluid hds-placeholder">
                  <div class="hds-paragraph">
                    <div class="hds-line"></div>
                    <div class="hds-line"></div>
                    <div class="hds-line"></div>
                  </div>
                </div>
              </div>
            </hds-column>
            <hds-column>
              <div class="hds-segment">
                <div class="hds-fluid hds-placeholder">
                  <div class="hds-paragraph">
                    <div class="hds-line"></div>
                    <div class="hds-line"></div>
                    <div class="hds-line"></div>
                  </div>
                </div>
              </div>
            </hds-column>
            <hds-column>
              <div class="hds-segment">
                <div class="hds-fluid hds-placeholder">
                  <div class="hds-paragraph">
                    <div class="hds-line"></div>
                    <div class="hds-line"></div>
                    <div class="hds-line"></div>
                  </div>
                </div>
              </div>
            </hds-column>
            <hds-column>
              <div class="hds-segment">
                <div class="hds-fluid hds-placeholder">
                  <div class="hds-paragraph">
                    <div class="hds-line"></div>
                    <div class="hds-line"></div>
                    <div class="hds-line"></div>
                  </div>
                </div>
              </div>
            </hds-column>
            <hds-column>
              <div class="hds-segment">
                <div class="hds-fluid hds-placeholder">
                  <div class="hds-paragraph">
                    <div class="hds-line"></div>
                    <div class="hds-line"></div>
                    <div class="hds-line"></div>
                  </div>
                </div>
              </div>
            </hds-column>
            <hds-column>
              <div class="hds-segment">
                <div class="hds-fluid hds-placeholder">
                  <div class="hds-paragraph">
                    <div class="hds-line"></div>
                    <div class="hds-line"></div>
                    <div class="hds-line"></div>
                  </div>
                </div>
              </div>
            </hds-column>
          </hds-grid>
        </article>
        <article class="hds-segment">
          <button class="hds-button hds-tiny hds-icon hds-primary hds-basic"
            @click="example1code = !example1code"
            v-if="example1code"
          >
            <i class="hds-dropdown hds-icon"></i> Show Code
          </button>
          <button class="hds-button hds-tiny hds-icon hds-primary hds-basic"
            @click="example1code = !example1code"
            v-else
          >
            <i class="hds-right hds-angle hds-icon"></i> Show Code
          </button>
          <prism v-show="example1code" language="html" style="transition: 2sec">
           &lt;hds-grid cols="6"&gt;
              &lt;hds-column&gt;
                &lt;div class="hds-segment"&gt;&lt;/div&gt;
              &lt;/hds-column&gt;
              &lt;hds-column&gt;
                &lt;div class="hds-segment"&gt;&lt;/div&gt;
              &lt;/hds-column&gt;
              &lt;hds-column&gt;
                &lt;div class="hds-segment"&gt;&lt;/div&gt;
              &lt;/hds-column&gt;
            &lt;/hds-grid&gt;
         </prism>
        </article>
      </div>
      <hds-card title="variable Size">
        <hds-grid>
          <hds-column size="10">
            <div class="hds-segment">
                  <div class="hds-fluid hds-placeholder">
                    <div class="hds-paragraph">
                      <div class="hds-line"></div>
                      <div class="hds-line"></div>
                      <div class="hds-line"></div>
                    </div>
                  </div>
                </div>
          </hds-column>
          <hds-column size="6">
            <div class="hds-segment">
                  <div class="hds-fluid hds-placeholder">
                    <div class="hds-paragraph">
                      <div class="hds-line"></div>
                      <div class="hds-line"></div>
                      <div class="hds-line"></div>
                    </div>
                  </div>
                </div>
          </hds-column>
        </hds-grid>
        <hds-grid>
          <hds-column size="4">
            <div class="hds-segment">
                  <div class="hds-fluid hds-placeholder">
                    <div class="hds-paragraph">
                      <div class="hds-line"></div>
                      <div class="hds-line"></div>
                      <div class="hds-line"></div>
                    </div>
                  </div>
                </div>
          </hds-column>
          <hds-column size="12">
            <div class="hds-segment">
                  <div class="hds-fluid hds-placeholder">
                    <div class="hds-paragraph">
                      <div class="hds-line"></div>
                      <div class="hds-line"></div>
                      <div class="hds-line"></div>
                    </div>
                  </div>
                </div>
          </hds-column>
        </hds-grid>
      </hds-card>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HDSGridDemo',
  data () {
    return {
      example1code: false,
      dynamicGrid: {
        noOfCols: 4
      }
    }
  } 
}
</script>