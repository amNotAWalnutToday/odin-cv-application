const FormInput = ( {label, id, type, handleInput} ) => {
    const decider = (id) => {
        const infoCons = [
            id === 'first-name',
            id === 'last-name',
            id === 'birth-date',
            id === 'location',
            id === 'email',
            id === 'phone-number',
            id === 'description',
        ];
        const experienceCons = [
            id === 'company',
            id === 'position',
            id === 'start-date',
            id === 'end-date',
            id === 'extra-info',
        ];
        const educationCons = [
            id === 'university',
            id === 'course',
            id === 'start-date-edu',
            id === 'end-date-edu',
            id === 'extra-info-edu',
        ];
        if(infoCons.some(Boolean)) return 'personal';
        if(experienceCons.some(Boolean)) return 'experience';
        if(educationCons.some(Boolean)) return 'education';
    }

    return(
        <div>
            <label htmlFor={id}>{label}</label>
            <input 
                id={id}
                type={type ? type : 'text'}
                pattern={id === 'phone-number' ? '[0-9]{10,11}' : undefined}
                placeholder={label}
                onChange={(e) => handleInput(e, id, decider(id))}
            />
        </div>
    );
}

export default FormInput;