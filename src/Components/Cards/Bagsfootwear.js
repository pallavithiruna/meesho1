import React from 'react'
import Cards from './Card';
import './Card.css';
import Nav from '../Navbar/Nav';

function Bagsfootwear() {
   const foot=[
        {
            productImage:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHsAuAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgIDBAUHAQj/xAA8EAABAwMCAgcECQMEAwAAAAABAAIDBAUREiEGMQcTQVFhcYEUIpHRFTJCU4KSocHwVHKxIzNSYggkov/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDuKIiAiIgIiICIiAiIgIiICIiAi0fGt4qbBwvcLrRQMnmpYw8RuzgjUM8vDKi3Rz0nR8YXF1tloPZqpsDpi5smppwQCO/7WUHRUREBERAREQEREBERAREQEREBERAREQEREBa6+3mgsNsmuV0nbDTQtyXHmT2ADtJ7lH+NOkWw8JxujqZxU1+Pdo4CC/8AEeTR5r524140u3GVcJrg8R00ZJgpGH3I/mfEoNlx50j3fi6okha99Has+5SMfjUO+Qj6x8OQ/VX+huqNDxlDVPkayMAxSOPLDgTj/wCf8KCLcRSGitscTP8AdqMzPI5huNLR6jUfUIPsMFeqEdEXEzuI+E4vaX6q6hPs85PN2ANLvUY9QVN0BERAREQEREBERAREQEREBERAREQabi68iw8PVtwDdUkcZ6pn/J/YP39F8/Uv01eamGknu1zkYYG9a01T2xuJySTvjYKU9NfEUNddo7LHUhsNHvOADjrCBzwOwf5XP4JaagoZWxiCrfUvwAA8t0+RaM9iDZX7h/h21RtjmBdI8fXpqhxc3xIcMHyUJnpwJXNgf1rAfddgNJHiM7fErNrXOYBEThrcgNB2G+dvUq3QtBk1OALRucoLMFMzWPaGu0DcjlkKueV00zpH83Hl3DsA8AF7UzCWQlrQ0K0g6r/481cjOJrnSAnqpaQPI7NTXbH4Ervy4D0Gt9ivzCBmetY4YPZE0ZLvzaR6rvyAiIgIiICIiAiIgIiICIiAiIgclqb/AHuls9tqqqWaPXBHq6svGcnl8Ssfibimg4fayOqfqqZml0UTSMuxjffkN1wvjO/1dxkbFXv/APala11VLBEMN0/7bMbbAEuI73+AADTsNXdKl9S98c0k8hMjgGSAAklxLTud9gqrpC1kwd7XTGPR9SJjmkHyOR+q1tPKIZ3yyGjrGAaW5kGY2jua4hwPoq60UXVdbRv1iXD3O1ucQe7coNPWODpSByVILmx4acd68ePePmruzWgncn6o/dBZ06cazg9g7VlW+nZUTZlfogj96V57Gjc48e7zCx2MfLIGsBc5xwApFHHHSReyDSRH78ne947PIHHrt2INx0Z3KQdIFDUPPVNneIGszsxmcNZ/O1fSoIXxvPcJIa6OoonaXU8oljeP+bTkH4r65s1wZdLRQ3GL6lXTsmH4mg/ug2CZVIKFBWEVLVUgIiICIiAiKmR7Y2l8jmtaOZccAIKkWgruNOG6BxZUXmj1jmxkmt3wGVoa/pTs0cbvo6CrrJANsRFjfUlBPMrU8R8Q2/h+kNRXygE/UjB9557gueV3HfE1x2tdJTUMThs+TMj8f4WDS2merrW195qJaup7OtOd/AcgEGDV3KK4G6cUXfU+APEUETmjW4A+5H3ZyefPG/YorTMussz7tUUzqj2h5e8sG2Tz27u5bi9SNud5fBTNHslG850jaWc7Od5NHuj8R7VL7LS+y29kTtJzvpHJqCO09mt90jjnhifS1GMuOnAz34UE4hjZFcZo3z9Y9p9545OK7JUARxSOaADpO641eocVsr3kElyDVNbGz3ne8exo5eqtuJc4uJ3V2V2dm8lVb4GVNQY5C4N0l2QUGXZR1IqK4gaoWYjJ5a3bBal9TI+V5a84c0sznJx8+31U/HBlc6hioW0lS0yPEjnHG2o6G5ONvteW6w5ej+sgka2SnqRlmvIIIAPftsUEL0NawAc19L9C1wNw6PaEPILqV8lOfJpy39CFxhnBcjZA18U+XcgHt38P55Lr/R5S1PDvD3stPCCJpjOQ/cgkNGOf/UIOhNCqwo+b3VtONEPjsfmvPp2q+7h+B+aCQhVKOfTtV93D8D80+nav7uH4H5oJGijn07V/dw/A/NEEjREQc/4y6QW224TWa0GA3CIDrpqhwEcORkbZy44PgFB6qppK+TruIOIPbHHfqzUEsHk0YaPgrXSZYLhFxNV11Y2lqYZ3l0Tvda9rcbNPf6qGuoIDzEjfKNpHx1/sgnMVz4UpxhjovRuFcdxHw6GOY1zBraWjbvCgDrfFzBHrHID+jSvBb2OBGsfCQf5Yg6TSX23ttNLKainjcYG5aX4ION1qOIL/ANdRR0tE95qKzBjcCW6Iu1/PO/Iep7sxGK00+TNVStdBENcsbHuBeM7NGW83Ehvr4KVcN2mWrqn1tY0OqZTnSBswbYaB2ADAHgEGXaLZEyJuqMh2PrNcQcqR0tPUxwh1LIJwOccuzvR3zWVTW1jGAyOAx2Ba298RWmxgjrC+X7tjt/VBZu9waKSdhD4p2t3ikGHAeXaPFckus2ud7sk5PatvxJxjU3aYEMayJvJmMn4qMyF87v8ATDnZ5dpQUvcthw9C6e4Obg6RGdRA5KmmtTstNW8xg8mN3e7yC2z5PoinBZSuMx3ipWAu/FKRz/tQdHrbncHSs9mrbbCTpLs1BP1SdPMd2ezkRzKwZ6+upqKUNqaJ+XMbmneM6Wl2kafxfDC5bHPdaiV8jmV0j3uLnFrXnJ9FtqWjv82Oqtd3k7sU0p/ZBLKW610bw6IM1HG8mMDfPZ4ro9tq5ZbfA5+nJbk45enguW2jhXi6rlYGWathYTvJUOEQHo45/Rd3sduFJaaWmq4oHzxxhr3NbkE+BIQR9zi9xc4+8UUx9kpv6eL8gT2Sm/p4vyBBDkUx9kpv6eL8gT2Sm/p4vyBBDkUx9lp/uIvyBEF5ERBh19robizRXUkM7e6RgK0U/R7wtPu+0xj+1zh+6lKIITJ0V8JP5UMrf7Z3fNWHdEfCp+rHWt/tqnKeog+eOJ7TbrXxf9CWfruphcx0rqiUv/1MHHoATt4qY24U1FAGwv1nGHPJ5qFceU9RFxldrhREzMfUFskefficMDBHcQAR4ELUt4mr4aWSGnoJnTluhjntwGd58SgkXF/GgpWvpaInrTsXdy5pLPUV9QSNcsjuZ5rK+j5JH9fdKkR6jnSDlx/ngs+AiKLTSQinj7ZJBglBhQWdrAH10oaOxreZ/ngtlTwai0UUIijHOV22VbiPWSEU8MtTIftFhcPh81vbdwrxFcnDFPJG3/uCMeiDygFFQPEpLaifOdT9wD/P4VtKWqq7lMGRtAaT9li3to6L5xpfWyEnuJU3tnCtHbmgNaMjtwg1NgshjYHPB1dqllNSaWgZWRBTtYAGtCymx4QWmRAK+0YXuF6gIiICIiAiIg1bL1E/GIZN/EfNVC7MLtPUvz5j5rJNDSAbU0I2/wCAXnsNIOVND+QIFLVCoe5ojcwtAO5B5+XkspWoYIYSTFExhOx0txlXUBERBBONOAXXysfX2+eGGqczS7rARq/EMkfAqFHop4ldqBmocn7Rq3jHlhmR8F3BeIOP2/oZqNWu4XaKNxG/s8Re4fjf8lJ7d0V8N0mHVEU1dIPtVUmrPoMD9FOkQayjsVroWBtLQwRAdjIwFnNiY3ZjGgeSuL0IKNHZnZOrb2hVog8AAXqIgIiICIiAiIgIiIP/2Q==",
            productName: "formal-shoes",
            price: "1,890",
            rating: "45%",  
        },
        {
            productImage:"data:image/jpeg;base64,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",
            productName: "trendy",
            price: "1,000",
            rating: "68%",  
        },
        {
            productImage:"data:image/jpeg;base64,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",
            productName: "fit-wear",
            price: "800",
            rating: "78%",  
        },
        {
            productImage:"data:image/jpeg;base64,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",
            productName: "fashion",
            price: "950",
            rating: "88%",  
        }
    ]
  return (

    <div className='common'>
        <Nav/>
      {foot.map((prod,idx)=>(<Cards
      key={idx}
      idx={idx}
      prod={prod}
      />))}
    </div>
  )
}

export default Bagsfootwear
