const DynamicChartComponent = ({tagName, labels, values}: any) => {
    const TagName = tagName

    return (
        <div className="w-full p-2 mb-2 bg-white rounded shadow-lg h-1/3">
            <TagName
                height={110}
                width={110}
                options={{
                    maintainAspectRatio: false
                }}
                data={{
                    labels: [...labels],
                    datasets: [{
                        label: '# of Votes',
                        data: [...values], // dynamic data
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }],
                }}
            />
        </div>
    )
}

export default DynamicChartComponent

