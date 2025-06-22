<template>
  <tr v-for="(item, dataindex) in data" :key="item.id" :class="`table_rows table_row_${item.id}`">
    <td>
      <table-row-action :item="item"></table-row-action>
    </td>
    <td>
      <select-single :data="item" />
    </td>
    <template v-for="(row_item, index) in setup.table_row_data" :key="index">
      <td v-if="row_item == 'id'">
        {{ dataindex + 1 }}
      </td>
      <td v-else-if="row_item == 'picture' && item[row_item]" class="text-wrap max-w-120">
        <img 
          :src="item[row_item]" 
          :alt="item.title || 'Image'" 
          class="table-image"
          @error="handleImageError"
        />
      </td>
      <td v-else class="text-wrap max-w-120">
        {{ trim_content(item[row_item], row_item) }}
      </td>
    </template>


  
  </tr>
</template>

<script>
import setup from "../../setup";
import SelectAll from "./select_data/SelectAll.vue";
import TableRowAction from "./TableRowAction.vue";
import SelectSingle from "./select_data/SelectSingle.vue";
export default {
  props: ["data"],
  data: () => ({
    setup,
  }),
  components: {
    SelectAll,
    TableRowAction,
    SelectSingle,
  },

  methods: {
    trim_content(content, row_item = null) {
      if (typeof content == "string") {
        if (row_item == "created_at" || row_item == "updated_at") {
          return new Date(content).toLocaleTimeString();
        }
        return content.length > 50 ? content.substring(0, 50) + "..." : content;
      }
      if (content && typeof content === "object") {
        for (const key of Object.keys(content)) {
          if (key === "title" && content.title) {
            return content.title;
          }
          if (key === "name" && content.name) {
            return content.name;
          }
        }
      }

      return content || "";
    },
    
    handleImageError(event) {
      // Handle broken image by hiding it or showing a placeholder
      event.target.style.display = 'none';
      // Or you could replace with a placeholder image:
      // event.target.src = '/path/to/placeholder-image.png';
    },
  },
};
</script>

<style scoped>
.max-w-120 {
  max-width: 120px;
}

.table-image {
  max-width: 80px;
  max-height: 60px;
  width: auto;
  height: auto;
  object-fit: cover;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
  transition: transform 0.2s ease;
  cursor: pointer;
}

.table-image:hover {
  transform: scale(1.1);
}

/* Optional: Add a loading state */
.table-image[src=""] {
  display: none;
}
</style>
