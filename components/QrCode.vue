<template>
  <div>
    <div ref="canvas"></div>
  </div>
</template>

<script>
import QRCodeStyling from 'qr-code-styling'

export default {
  props: {
    text: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.generateQRCode()
  },
  methods: {
    generateQRCode() {
      const qrCode = new QRCodeStyling({
        width: 250,
        height: 250,
        data: this.text,
        dotsOptions: {
          color: "#ffffff", // Customize the color
          type: "rounded" // Use "rounded" for circular dots
        },
        backgroundOptions: {
          color: "#000000", // Customize the background color
        },
        cornersSquareOptions: {
          color: "#ffffff", // Customize the color of the corner squares
          type: "extra-rounded" // Use "extra-rounded" for circular corner squares
        },
        cornersDotOptions: {
          color: "#ffffff", // Customize the color of the corner dots
          type: "dot" // Use "dot" for circular corner dots
        },
        imageOptions: {
          crossOrigin: "anonymous",
          margin: 20
        },
        downloadOptions: {
          type: "svg",
          name: "qr-code"
        }
      })
      qrCode.append(this.$refs.canvas)
    }
  },
  watch: {
    text() {
      this.generateQRCode()
    }
  }
}
</script>

<style scoped>
/* Add any additional styles if needed */
</style>