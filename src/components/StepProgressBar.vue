<template>
  <div class="step-progress-bar">
    <div class="container mt-4">
      <div class="row">
        <div class="col">
          <div class="progress">
            <div
              class="progress-bar"
              :style="{ width: currentBarPercentage + '%' }"
            >
              <div
                v-for="(vallue, i) in stepTitles"
                :key="i"
                :ref="'step-circle-' + ++i"
                :class="['step-circle', 'not-started-step-circle']"
                :style="{ left: ((i - 1) * 100) / (totalSteps - 1) + '%' }"
              >
                {{ i }}
                <!-- <p class="mt-2" style="color: #036ab5;">{{ vallue }}</p> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h4
      ref="stepTitleRef"
      class="step-title-header mt-4 text-center font-weight-bold mx-auto"
    ></h4>
  </div>
</template>

<script>
export default {
  name: "StepProgressBar",
  props: ["totalSteps", "initCurrentStep", "stepTitles"],
  data() {
    return {
      currentStep: this.initCurrentStep,
      currentBarPercentage: 0
    };
  },
  methods: {
    changeCurrentStep(newStep) {
      if (newStep < 0) {
        this.currentStep = 0;
      } else if (newStep > this.totalSteps + 1) {
        this.currentStep = this.totalSteps + 1;
      } else {
        this.currentStep = newStep;
      }
    },
    updateProgressBar() {
      // Completed Steps
      let totalCompletedSteps = 0;
      if (this.currentStep > this.totalSteps) {
        // Max
        totalCompletedSteps = this.totalSteps;
      } else {
        if (this.currentStep <= 0) {
          // Min
          totalCompletedSteps = 0;
        } else {
          // Index
          totalCompletedSteps = this.currentStep - 1;
        }
      }

      // Completed Circle
      for (let i = 1; i <= this.totalSteps; i++) {
        let stepCircleElement = this.$refs["step-circle-" + i][0];
        if (i == this.currentStep) {
          stepCircleElement.classList.add("current-step-circle");
          stepCircleElement.classList.remove("completed-step-circle");
          stepCircleElement.classList.remove("not-started-step-circle");
        } else if (i <= totalCompletedSteps) {
          stepCircleElement.classList.add("completed-step-circle");
          stepCircleElement.classList.remove("current-step-circle");
          stepCircleElement.classList.remove("not-started-step-circle");
        } else {
          stepCircleElement.classList.add("not-started-step-circle");
          stepCircleElement.classList.remove("completed-step-circle");
          stepCircleElement.classList.remove("current-step-circle");
        }
      }

      // Completed Bar Percentage
      let propgressBarInPercent = 0;
      if (totalCompletedSteps == this.totalSteps) {
        propgressBarInPercent = 100;
      } else {
        propgressBarInPercent =
          (totalCompletedSteps * 100) / (this.totalSteps - 1);
      }
      this.currentBarPercentage = propgressBarInPercent;

      //Set Step Title
      // var stepTitle = this.stepTitles[this.currentStep - 1];
      // this.$refs.stepTitleRef.innerHTML =
      //   stepTitle == undefined ? "" : stepTitle;
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.updateProgressBar();
    });
  },
  watch: {
    currentStep() {
      this.updateProgressBar();
    }
  }
};
</script>

<style lang="scss">
.step-progress-bar {
  .progress {
    height: 10px;
    position: relative;
    overflow: visible;
    background-color: #aaa;
  }

  .progress-bar {
    background-color: #036ab5;
  }

  // Basic
  .step-circle {
    border-style: solid;
    border-width: 3px;
    background: #ffffff;
    position: absolute;
    display: table-cell;
    height: 36px;
    width: 36px;
    text-align: center;
    vertical-align: middle;
    border-radius: 50%;
    font: 18px "josefin sans", arial;
    text-align: center;
    margin-top: 0px;
    padding-top: 5px;
    margin-left: -20px;
  }

  // Current
  .current-step-circle {
    border-color: #036ab5;
    background-color: #fff;
    color: #036ab5;
  }

  // After
  .completed-step-circle {
    border-color: #036ab5;
    background-color: #036ab5;
    color: #fff;
  }

  // Before
  .not-started-step-circle {
    border-color: #aaa;
    background-color: #fff;
    color: #aaa;
  }
}

.step-title-header {
  font-family: Arial, Helvetica, sans-serif;
  color: #036ab5;
}
</style>
