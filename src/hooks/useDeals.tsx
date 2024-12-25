import { useContext } from "react"
import { DealContext } from "@/provider/deals-context"

export const useDeals=()=>{
    const {deals,editDeal,removeDeals, addDeals}= useContext(DealContext);
    return {deals,editDeal,removeDeals, addDeals}
}