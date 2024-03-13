
function skillMembers() {
  var members = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Jim', age: 40 }
  ];

  return {
    members: members,
    getMember: function(name) {
      return members.find(function(member) {
        return member.name === name;
      });
    }
  };
}