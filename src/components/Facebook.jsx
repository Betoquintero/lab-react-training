import profiles from '../data/berlin.json';

export default function Facebook(props){
    return(
        profiles.map(elem => {
            return(
                <div>
                    <div>
                        <img src={elem.img} alt='firstName' width='120px'/>
                    </div>
                    <div>
                        <p>First Name: {elem.firstName}</p>
                        <p>Last Name: {elem.lastName}</p>
                        <p>Country: {elem.country}</p>
                        <p>Type: {elem.isStudent ? 'Student' : 'Teacher'}</p>
                    </div>
                </div>
            )
        })
    )
}