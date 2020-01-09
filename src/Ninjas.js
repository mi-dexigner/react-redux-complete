import React from 'react';

const Ninjas = ({ ninjas,deleteNinja }) => {

    // console.log(this.props);
    // const {name,age,birthday } = this.props;
    // const { ninjas } = props;
    // const ninjaList = ninjas.map(ninja => {
    //     if (ninja.age > 20) {
    //         return (
    //             <div className="ninja" key={ninja.id}>
    //                 <div>Name: {ninja.name}</div>
    //                 <div>Age: {ninja.age}</div>
    //             </div>
    //         )
    //     } else {
    //         return null
    //     }
    // })
    const ninjaList = ninjas.map(ninja => {
        return ninja.age > 20 ? (
                          <div className="ninja" key={ninja.id}>
                    <div>Name: {ninja.name}</div>
                    <div>Age: {ninja.age}</div>
                    <button onClick={()=>{deleteNinja(ninja.id)}}>delete ninja</button>
                </div>
        ):null ; 
    })
    return (
        <div className="ninja-list">
            {ninjaList}
        </div>
    )


}

export default Ninjas