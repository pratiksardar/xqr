<template>
  <div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import QRCode from 'qrcode'

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
    async generateQRCode() {
      try {
        await QRCode.toCanvas(this.$refs.canvas, this.text)
      } catch (error) {
        console.error('Error generating QR code:', error)
      }
    }
  },
  watch: {
    text() {
      this.generateQRCode()
    }
  }
}
</script>