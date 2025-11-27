interface User {
  uid: string,
  username: string
}

const getUser = () => ({
    uid: 123,
    username: "pablo_alonsov",
});

function getUser2():User {
  return {
    uid: '123',
    username: 'pablo_alonsov'
  }
}

const user = getUser();

const user2 = getUser2();

console.log(user, user2);
