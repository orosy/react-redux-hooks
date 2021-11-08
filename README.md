## 전역 상태 관리 Redux, React-Redux 를 활용한 숫자 카운트
React-Hooks의 useDispatch, useSelector를 활용

### useSelector
- connect 함수를 이용하지 않고 리덕스의 state를 조회할 수 있다.

```js
import { useSelector } from 'react-redux'

const count = useSelector((store) => store.counter);
```

### useDispatch
- 생성한 action을 useDispatch를 통해 발생시킬 수 있다.
- 만들어둔 액션 생성 함수를 import 한다.

```js
import * as actions from "../redux/actions";
import { useDispatch } from 'react-redux'

const dispatch = useDispatch();

...
<Btn onClick={() => dispatch(actions.increment(count.value))}>+</Btn>
<Btn onClick={() => dispatch(actions.decrement(count.value))}>-</Btn>
...
```
