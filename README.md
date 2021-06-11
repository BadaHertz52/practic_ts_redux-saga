# Typescript 에서 redux middleware 사용하기 2. redux-saga

### <"Typescript 에서 redux middleware 사용하기" 시리즈>
###### * 위의 시리즈는 **[해당 수업 내용](https://react.vlpt.us/using-typescript/06-ts-redux-middleware.html)** 을 실습하고 공부하며 개인적으로 보충한 것입니다. ☺

#### 1. 시리즈
  * [redux- thunk](https://github.com/BadaHertz52/practice_ts_redux-thunk)
  * [redux- saga](https://github.com/BadaHertz52/practic_ts_redux-saga)
  * [redux- thunk, redux-saga 리팩토링](https://github.com/BadaHertz52/practice_ts_redux_middleware ) 

#### 2. 구현하고자 한 기능 
##### 검색창에 사용자명을 조회하면  Git hub에서의 사용자가 있는 지 확인하고, 사용자가 있을 시 해당 계정의 username, thumbnail, bio, blog  를 보여주고 사용자가 없을 시 에러가 발생했다는 것을 보여주는 것을 구현하고 자 했다. 
-------------------------------------------------------------------------------------------------------------------------------------

### < Typescript 에서 redux-saga 사용하기>

#### 1. 사용된 라이브러리
##### react, redux, redux-react, typesafe-actions, redux-saga, acxios 


#### 2. 코드 구성
|reducer store |middleware|presentational components|container|
|--------------|----------|-------------------------|-------------------|
|ations <br >types <br> reducers <br> index|sagas     |GithubProfileInfo        |GithubProfileLoader|

* ations : 액션 타입과 액션 생성함수 정의

* types : 리듀서 함수의 인자인 state, action의 타입을 정의

* reducer : 초기 상태와 리듀서 함수 정의

* index : 
  *  moduels/github/index.ts : actions , types,reducers, thunks 를 외부로 내보냄 
  * moduels/index.ts : 루트 리듀서와 Rootstate (루트 리듀서와 같은 타입) 을 생성하고 외부로 보냄 
  
* sagas : redux-saga 함수 정의 

* GithubProfileInfo : 조회 결과에 따른 사용자 정보를 보여주는 뷰

* GithubUsername : username을 입력하고 결과를 조회할 수 있는 뷰 

* GithubProfileLoader : 스토어에 상태 조회, 액션을 디스패치 함 


#### 3. 배운 내용 : redux-thunk 와 redux-saga 의 차이
* redux-thunk 사용한 modules/github/tunks.ts 
``` typescript
function getUserProfileThunk(username :string):ThunkAction<void,RootState ,null , GithubAction>{
   return async (dipatch ) => {
   }
 };
```

* redux-thunk 사용한 modules/github/sagas.ts 
``` typescript
function* getUserProfileSaga( action: ReturnType<typeof getUserProfileAsync.request>){
   try {
     const userProfile :GithubProfile =yield call (getUserProfile , action.payload);
     yield put (getUserProfileAsync.success(userProfile)) ;
   } catch (e) {
     yield put (getUserProfileAsync.failure(e));
   }
 }
````

redux-thunk에서는 조회한 username을 인자로 받고 redux-saga에서는 조회한 action을 인자로 받는다.  
