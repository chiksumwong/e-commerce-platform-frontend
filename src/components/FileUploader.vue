<template>
  <b-row class="mt-1">
    <b-col sm="3">
      <label class="form-field pr-5">
        {{ name }}
        <span class="text-danger" v-show="is_required">*</span>
      </label>
    </b-col>
    <b-col sm="9">
      <div class="row">
        <!-- file upload button -->
        <div class="col-sm-2">
          <label
            id="file_upload-btn"
            for="file_upload"
            class="shadow btn btn-secondary btn-sm"
            >{{ $t("file_upload.btn.browse") }}</label
          >
          <!-- file input type -->
          <b-form-file
            id="file_upload"
            v-model="files"
            plain
            @change="onFileChange"
            multiple
          ></b-form-file>
        </div>
        <!-- file upload tag -->
        <div class="col-sm-10">
          <div class="d-inline-block">
            <b-form-tag
              v-for="(file, i) in totalFiles"
              @remove="removeFileTag(file)"
              :key="i"
              :title="file.name"
              class="mr-1 mb-1"
              >{{ file.name }}
            </b-form-tag>
          </div>
        </div>
      </div>
      <!-- File Validation -->
      <div v-show="$v.totalFiles.$error">
        <span
          v-show="is_required && !$v.totalFiles.required"
          class="dg-warning-msg"
          ><p class="mb-0">{{ $t("file_upload.error.least_one") }}</p></span
        >
        <span v-show="!$v.totalFiles.isFileLength" class="dg-warning-msg">
          <p class="mb-0">{{ $t("file_upload.error.name_long") }}</p>
        </span>
        <span v-show="!$v.totalFiles.isFileType" class="dg-warning-msg">
          <p class="mb-0">{{ $t("file_upload.error.type") }}</p>
        </span>
        <span v-show="!$v.totalFiles.isFileSize" class="dg-warning-msg">
          <p class="mb-0">{{ $t("file_upload.error.size") }}</p>
        </span>
        <span v-show="!$v.totalFiles.isFileNumber" class="dg-warning-msg">
          <p class="mb-0">
            {{
              $t("file_upload.error.number", {
                number: file_number
              })
            }}
          </p>
        </span>
      </div>
      <!-- End File Validation -->
    </b-col>
  </b-row>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { file_config } from "@/config/file.js";

export default {
  name: "FileUploader",
  props: {
    name: String,
    is_required: Boolean
  },
  data() {
    return {
      files: [],
      total_files: []
    };
  },
  validations() {
    if (this.is_required) {
      return {
        totalFiles: {
          required,
          async isFileLength(files) {
            return await this.verifyFileNameLength(files);
          },
          async isFileType(files) {
            return await this.verifyFileType(files);
          },
          async isFileSize(files) {
            return await this.verifyFileSize(files);
          },
          async isFileNumber(files) {
            return await this.verifyFileNumber(files);
          }
        }
      };
    } else {
      return {
        totalFiles: {
          async isFileLength(files) {
            return await this.verifyFileNameLength(files);
          },
          async isFileType(files) {
            return await this.verifyFileType(files);
          },
          async isFileSize(files) {
            return await this.verifyFileSize(files);
          },
          async isFileNumber(files) {
            return await this.verifyFileNumber(files);
          }
        }
      };
    }
  },
  methods: {
    verifyFileNameLength(files) {
      let res = files.every(file => {
        return file.name.length <= file_config.length && file.name.length > 0;
      });
      return res;
    },
    verifyFileType(files) {
      // every - when false, break, so will loop all file
      let res = files.every(file => {
        return file_config.mime.includes(file.type);
      });
      return res;
    },
    verifyFileSize(files) {
      // every - when false, break, so will loop all file
      let res = files.every(file => {
        return file.size <= file_config.size;
      });
      return res;
    },
    verifyFileNumber(files) {
      return files.length <= file_config.number;
    },
    conbineFileArray(preFiles, files) {
      // Merge two array (pre_files + current files)
      return preFiles.concat(files);
    },
    onFileChange() {
      // If user click cancel, files will be empty  ==> keep previous files (expect)
      // If user select new files, the files = new files  ==> append preivous files (expect)

      // onChange action will activate after file cahnged
      // files = current input files
      // start form step 2 (second file)
      let pre_files = this.total_files;
      this.total_files = this.conbineFileArray(pre_files, this.files);
    },
    removeFileTag(file) {
      // Get files exclude input file, same file will also remove
      const items = this.totalFiles;
      let filteredItems = items.filter(item => item !== file);
      this.totalFiles = filteredItems;
      this.files = []; // prevent add conbine files again
    }
  },
  computed: {
    totalFiles: {
      get: function() {
        // for init case, current will be [] on onChange
        return this.conbineFileArray(this.total_files, this.files);
      },
      set: function(value) {
        this.total_files = value;
      }
    },
    file_number() {
      return file_config.number;
    }
  }
};
</script>

<style scoped>
.form-field {
  font-size: 0.9em;
  margin: 0px;
  color: #047dbc;
  padding: 4px 3px;
  font-weight: bold;
}
#file_upload-btn {
  cursor: pointer;
  border-radius: 0;
}
#file_upload {
  opacity: 0;
  position: absolute;
  z-index: -1;
}
</style>
