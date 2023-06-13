// Set
//고유한 값만 저장
//키 저장은 없다
//값이 중복되지 않는 유일한 요소로만 구성
//값 추가, 값 검색, 값 삭제, 모든 값 제거, 존재 여부 확인

//형태
const mySet = new Set()
mySet.add('value1') // 값 저장
mySet.add('value2')
mySet.add(3)
mySet.add(4)
mySet.add('value3')

console.log(mySet.size) //사이즈(길이확인)
console.log(mySet.has('value1'))//값이 있는지 확인 불값
console.log(mySet.has('value2'))
console.log(mySet.has(3))

//iterate 반복
for (const value of mySet.values()) {
  console.log(value)
}