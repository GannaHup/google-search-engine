import { CombinedState, combineReducers } from "redux"
import GoogleSearchReducers from '@/app/ui/stores/reducers/GoogleSearchReducers'
import { ActionDispatch, ReducersAllTypes } from "@/app/infrastructures/misc/types/store"

const appReducers = combineReducers<ReducersAllTypes>({
  google: GoogleSearchReducers
})

const rootReducer = (state: CombinedState<ReducersAllTypes> | undefined, action: ActionDispatch) => {
  return appReducers(state, action)
}

export default rootReducer
