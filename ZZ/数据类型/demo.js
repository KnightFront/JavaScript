function Person(name) {
    var _age;
    function setAge(n) {
      _age = n;
    }
    function getAge() {
      return _age;
    }
  
    return {
      name: name,
      getAge: getAge,
      setAge: setAge
    };
  }
  
  var p1 = Person('张三');
  p1.setAge(25);
  console.log(p1.getAge()); // 25