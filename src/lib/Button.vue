<template>
<button class="to-button" :class="classes" :disabled="disabled">
  <span v-if="loading" class="to-loadingIndicator"></span>
  <slot/>
</button>
</template>

<script lang="ts">
import { computed } from 'vue'
export default {
  inheritAttrs: false,
  props: {
    theme:{
      type:String,
      default:'button'
    },
    size:{
      type:String,
      default:'normal'
    },
    level:{
      type:String,
      default:'normal',
    },
    disabled:{
      type:String,
      default:false,
    },
    loading:{
      type:Boolean,
      default:false
    },
  },
  setup(props){
    const {theme,size,level} = props;
    const classes = computed(()=>{
      return {
        [`to-theme-${theme}`]:theme,
        [`to-size-${size}`]:size,
        [`to-level-${level}`]:level,
      };
    });
    return {classes}
  }
};
</script>
<style lang="scss">
$h:32px;
$border-color:#d9d9d9;
$color:#333;
$blue:#40a9ff;
$radius:4px;
$red:red;
$grey:grey;
.to-button{
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-block;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black,0.95);
  transition: background 250ms;
  &+&{
    margin-left: 8px;
  }
  &:hover,&:focus{
    color: $blue;
    border-color: $blue;
  }
  &:focus{
    outline:none;
  }
  &::-moz-focus-inner{
    border: 0;
  }
  &.to-theme-link{
    border-color: transparent;
    box-shadow: none;
    color:$blue;
    &:hover,&:focus{
      color: lighten($blue,10%);
    }
  }
  &.to-theme-text{
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,&:focus{
      background: darken(white,5%);
    }
  }
  &.to-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.to-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.to-theme-button{
    &.to-level-main{
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,&:focus{
        background: darken($blue,10%);
        border-color: darken($blue,10%);
      }
    }
    &.to-level-danger{
      background: $red;
      border-color: $red;
      color: white;
      &:hover,&:focus{
        background: darken($blue,10%);
        border-color: darken($blue,10%);
      }
    }
  }
  &.to-theme-link{
    &.to-level-danger{
      color: $red;
      &:hover,&:focus{
        color: darken($red,10%);
      }
    }
  }
  &.to-theme-text{
    &.to-level-main{
      color: $blue;
      &:hover,&:focus{
        color: darken($blue,10%);
      }
    }
    &.to-level-danger{
      color: $red;
      &:hover,&:focus{
        color: darken($red,10%);
      }
    }
  }
  &.to-theme-button{
    &[disabled]{
      cursor: not-allowed;
      color: $grey;
      &:hover{
        border-color: $grey;
      }
    }
  }
  &.to-theme-link,&.to-theme-text{
    &[disabled]{
      cursor: not-allowed;
      color: $grey;
    }
  }
  > .to-loadingIndicator{
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: to-spin 1s infinite linear;
  }
}
@keyframes to-spin{
  0%{transform: rotate(0deg);}
  100%{transform: rotate(360deg);}
}
</style>
