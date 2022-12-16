import {defineStore} from "pinia";
import {DomainStore} from "@/stores/domain.store";

export default {
  useCoreDomainStore: defineStore('domain', DomainStore)
};
