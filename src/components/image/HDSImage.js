export default {
  name: 'HDSImage',
  template: '<div>hello World<div>',
  // render (createElement) {
  //   return (this.link)?createElement('a', {
  //       class: this.linkClassList,
  //       attrs: {
  //         href: this.link,
  //         target: this.target,
  //         'v-if': this.link != undefined
  //       }
  //     }, [
  //       createElement('img', {
  //         class: this.linkClassList,
  //         attrs: {
  //           src: this.src,
  //           alt: this.alt
  //         },
  //         domProps: {
  //           src: this.src,
  //           alt: this.alt
  //         }
  //       })
  //     ]):
  //     createElement('img', {
  //       class: this.imageClassList,
  //       attrs: {
  //         src: this.src,
  //         alt: this.alt
  //       },
  //       domProps: {
  //         src: this.src,
  //         alt: this.alt
  //       }
  //     })
  // },
  props: {
    src: String,
    alt: String,
    link: String,
    target: String
  },
  data () {
    return {
      linkClassList: {
        'hds-link': true
      },
      imageClassList: {
        'hds-image': true
      }
    }
  }
}