<script setup lang="ts">
const input = ref('')
const radio = ref(1)
const rate = ref(3)
const toggle = ref(true)
</script>

<template>
  <FmPageLayout :navbar="false" tabbar>
    <FmPageMain title="Button">
      <var-button>默认按钮</var-button>
      <var-button type="primary">
        主要按钮
      </var-button>
      <var-button type="info">
        信息按钮
      </var-button>
      <var-button type="success">
        成功按钮
      </var-button>
      <var-button type="warning">
        警告按钮
      </var-button>
      <var-button type="danger">
        危险按钮
      </var-button>
    </FmPageMain>
    <var-form class="mx-4">
      <var-input v-model="input" label="用户名" placeholder="请输入用户名" />
    </var-form>
    <FmPageMain title="Radio">
      <var-radio-group v-model="radio">
        <var-radio :checked-value="1">
          单选框 1
        </var-radio>
        <var-radio :checked-value="2">
          单选框 2
        </var-radio>
      </var-radio-group>
    </FmPageMain>
    <FmPageMain title="Rate">
      <var-rate v-model="rate" />
    </FmPageMain>
    <FmPageMain title="Switch">
      <var-switch v-model="toggle" />
    </FmPageMain>
  </FmPageLayout>
</template>
