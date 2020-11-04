import React, {useState} from "react";
 
function MemberTable({ members }) {
  return (
    <table>
      <thead>
          <tr>
              <th>Name:</th>
              <th>Age:</th>
          </tr>
      </thead>
      <tbody>
          {members.map(getRows)}
      </tbody>
    </table>
  );
}

function getRows(member) {
    return (
        <tr key={member.name}>
            <td>{member.name}</td>
            <td>{member.age}</td>
        </tr>
    )
}
 
function MemberDemo(props) {
  return (
    <div>
      <h4>All Members</h4>
      {MemberTable(props)}
    </div>
  );
}
 
export default function App() {
  const initialMembers = [{name : "Peter", age: 18},
                          {name : "Hanne", age: 35},
                          {name : "Janne", age: 25},
                          {name : "Holger", age: 22}];
  const [members,setMembers] = useState(initialMembers)
  
  return (
    <React.Fragment>
        <MemberDemo members={members} />
    </React.Fragment>
  );
}