//返回最新状态
import { SET_ALERT, REMOVE_ALERT } from '../types';

//state代表状态,action就相当于alertState里的dispatch里的(type,payload)
export default (state, action) => {//payload代表将要进行赋值的数据
  switch (action.type) {
    case SET_ALERT://在此之前状态未发生改变,所以不需要返回状态
    //通过类型判断,准确则返回showAlert所需参数,即action.payload("msg, type")
    //因为initialState = null,所以直接返回赋值数据
      return action.payload;
    case REMOVE_ALERT:
      return null;
    default:
      return state;//如果匹配类型失败,返回所有状态
  }
};
