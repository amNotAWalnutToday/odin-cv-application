const Header = ( {preview, info} ) => {
    let name;
    if(info) name = `${info.firstName} ${info.lastName}`

    return(
        <header className={preview ? 'preview' : undefined}>
            <h1 className={preview ? 'preview name' : ''}>
                {preview ? name : 'CV Builder'}
            </h1>
        </header>
    );
}

export default Header;