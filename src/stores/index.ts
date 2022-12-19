import {defineStore} from "pinia";
import {DomainStore} from "@/stores/domain.store";
import {StoreIds} from "@/stores/store-ids";

export default {
  useCoreDomainStore: defineStore(StoreIds.CoreDomain, DomainStore)
};
