function Filters() {
    return (
        <div className="flex items-center">
            <input
                type="checkbox"
                name=""
                id="premiumFilter"
                className="ml-3 mr-1 h-8 w-8"
            />
            <label htmlFor="premiumFilter"
                className="text-sm text-gray-600 font-semibold">Show Premium Only</label>
        </div>
    )
}

export default Filters