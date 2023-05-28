import React, { useState, useRef, useEffect } from "react";
import Modal from "../utils/Modal";

import HeroImage from "../images/hero-image.png";
import { Link, useLocation } from 'react-router-dom';


function PirReadings() {
  const basePath = import.meta.env.BASE_URL;

  return (
 
      <div className="flex flex-col items-center text-center bg-blue-100 p-2 md:py-20" id="companies_list">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX///8AAADAwMD39/d+fn7p6elBQUGdnZ3k5OTU1NSzs7OZmZnDw8P5+fn8/PxWVlba2trw8PCoqKjNzc1fX18yMjKIiIg6Ojo3NzeDg4NkZGSQkJBOTk4REREXFxe6urpGRkYoKChxcXEqKiogICB1dXVsbGysrKwUFBQ+zO2nAAAOlUlEQVR4nN1d6ULyOhC1YLWiIGXzwxYQZfH9n/Aii/TMTNI0Wy+en4Ilp5k9k+TuriH6aWdU7MrpcpEk61nW9N//58g6848E8dj2mDxiXDwkAv4KxeF8IdH7Qdr22DygO/qnonfArO3hOSMtlhp+STJte4COyGdaegd8tz1EJwye6/gdXEbbg3RBRy+fJ9y3PUp7pO8G/JJk2PY4rdEz4ne7U9jdmRH8bHugthh+GfErO20P1BYrLa+vXTFajYdZervhzKOa3eto3PboPOBewW7z+dJve2xesFXMXq/b9sg8QTai77fr9ijEGXz/Q7m8pIMPf8G4XCBZ0b+SxR8h+MG3PySgh0iGE2wng8/TcaczTr0b7y4P1Va+f8MAT7Py10PN/Jpw7idacBE9UhN623t8NuX3lft7uCFeNlxRNr5MecpsjJJgNx2Pitl8Xjx5+u0zBopw6t5PsEgzetUMZvv36e+XSp+WNhdLzj948CFNHfpU8aGD0Rv5mj9VTdcqgkmydDerA1p0kkaeChHPwvmnLw9X8zvgy5liQZ4oJO+K0qknW5cJNqaKiePzc/I8wdH3vuWfLh1/+oRsrSeYJKPrl7sWEzrHp72xL3RfVb+8dOD1i9SgMns0DE+Pr5vFQTfWk1EjC0B1gBVgnpRLT14Y6nXwjO1dirq0KMxNLNFClk3oKlOv7gTrdPAMwc4VhvLaxRl6oJ+PdL/bcyaocxN1WJoFPIQB/SctwS93gvyh09Xg7q6/MpraZ5PfwGD3nXyqLe8vnYMawchsL58pojiEwboCSQvJmJ90T393LgoLbqIyZKUFb0YRXQWZwq7isW/b2fPIPSpNuSRWB5yZMKy6ShloZ4ibmQhPfGjmi3QE62ak5F8QUJPjjOHLxPgLSrjzF2wLboKInGaBofrKB9qfwXATjX/OQrUPj3m/XgeP2BsxrAmOISvboAud00cV/vhJVpQZDYNGgh9oAytUZlzxZGric70w5ZEgt4o0HVVBNzCMyF7gMxon8QAiHz9/vr+Wk13x0tBxGIioWN9MPjvDYY9WJHTJFQoiVEQGdS/qZVKdh7JJ7bHGTZxBGwUPMdTZDlA3rbE1YI/RkpJwjepgh9dXjdPhWjdxBHf4b792ggi5Oj7tw/fQd6ISfOA/5mK88WZmajMDI6MnSNVL/W7xZcKbIAEFjv1FlTGaTKORDgrBxhQs/b+a/z8Da2zwEfoitLKacLzeoZi4iXqCGJerTQ3oGqZCaK9gCrX5Rt1qjrsOngDxjjoRh/R+V/2kO61+9FH9CAM9Br2g1odqP+Az+I/m8zB0NUNYjgEBw1ddtUF5Xd1IZ26EjN5GROl3dvwZZ4CzAFOKE1VNlGo7wnit7krQJJIxmUEyA2rtB1EEl43eUEldhDJjy4wI1uvgHS0AqKMNEDhwFiDm1VnhgQaHiuDahKAgonz1icTk6mQc3inoD2RVFV8hxYoMcgXOLFQz0UGaOGqWT9QvAgLWigeg4fhmtloVU/LHD5EgfxNmIspnkGbGGicM34P0ABhWanZkHs4qR4vGQqZh5iaMdJCl/pqK0Vo5LNDDq+kgQvqbbmWKv18JrhMKTyKq8xWobbiMBPnJ9R1hmFeZW5xFFtjYhmrcTUjFm3v1Ekb11ZP8r+IqKyVGMECwNgvlEFpX9hWqyQQTXevW9fu0Z/tKflkRX3BDwAPsN4mivIVq6vJbqZzGy39s2SfDsyv5quoxxONgwkB+P+BJ4dxEBeoVhnQ2/V7fi7HkvlwuX9G3qcM8YAglzOAieoaXSidmHKC5SoY+MnoTgsnCR1eKpiagYhjSTRCwpU8LoNsDyVcwjKKDF3hohsXEAj6SGQYM1SS47wGBnArjXZGhbajWwE3UPbwhwOF/1DKMqINnOBsbcPg4WIFh2FAtKe+3NKmpXy6tA7hD1GvO0KxkYesmiqOmZmQJw7VHawBqhbEAY2gbqgkZvUDw11ORbiD9amkt+vKPiAzDuonKyjYKgWNLMdp+1GpkGDhUqy7do492bJZEd4gCgZF3yIyeTpTGODQGrGVs8DNg+MWX3jzqIGm+gNKR4xYR3VoBa6S2IdhYRBnDuRtDjTusYRhIB48Ah2HU6KYGVCpICU/L0GOoxowl9m05unx4FrFaOoYBRZSWvx37RXQvU8PQY6jGCZL6pltgip6HZCpqhsHcxA9IV4bjSSToDsnbUjIUCPIzNxqGaiqCrs4Cqr50TCqGAkHermarg2ydyLEapV06VzAUCPZZOGCW0RsQdG2s/6w+jC4WyAylpJuNy5MOit9pBggAqcSLDMWqAv2mrYgKHdolXxJqBGjSoUG8xFAum7zglzy5iTMmLu4iV6+JywwVdSF0OpahmrrH3sHn48io1eIMlYWvqrRbhmq6TQT2CRQ+lJYmGUN1Za/iV725CS8UgcNG+6mWYKXs+hCCoP1eJQhx/9FPSZ+Nvjb7cspSCl43ctPBCyy3gkCmyboBsaW4tvg87I3Ggtlz1cEzLNdoIJrkAWA1PbatrvsQ0SOs5HTwoX9E91p8ap2gsi1LC3SHgtfJLhGBbYDvSUQVM1AP3A8tBfH9x591hHfb4NDayJSzGWuYtCnvo8NXHOUwsD/iwVZET3sE2UGdFuYUe4KsiahgO4OF4jOLo2dgCN7PLbXVwUr1ENvPLawdLPK4HnJAIewXNxJRKI9C7kPbsgyg7gl3h7BXtTlBlIOaXYkS4A15PgKM729oKqI/gMRTqG3VAZ7t+QgpqI/YEnRliHGn5zOkaIHYQkTviCS8NZZS/AnPR42ROTRyE3wNBurMzW0h5n+eGaIeWoko/RJvtqwDlHGbi4AeYEvtRPSui9sJmy93q7dI+UDFH1oS7JNNw80tBRgD/6dcXwobG0sd7JOz7FgNoh5T/S84I7s/5Jdvz1zBjQh26VYeixHC/wc5UbGf54J6m4ko26vUvDBcnx2GgRlB1t9mkYTjL0U71tRMRNlxfQsLbwbFwmWsUyPtdNCuso8RkfvYjWAmovzARaumGuid9XDClwmMZnDAdNDSW0OxNM6dCJY6aPv+S/0PBYClm0he7SLKAYQMMa59oAePyAT5+S629RXsaI5xiDk9j9OQoLWJ0K+OhgAzIEZuwt4GotZHuCchp23wghUVjIx9VgfZYYxrrGgXtUmo5lTjBK3wsYOqFthGHdJNnAC9s97zXwlQujHTQafCA+S/Ue5LqNo2o1DNjSCGRu6HlppgpCPoVwfvaNXdsbXKFKuTOV3wdNu3Dt7R/DdWdtjd30/u99w1+QvVrkB36PgwV/iMZH7R+x8xDEIQ160+3J/nAO9u4gQ46aR5vdwj/IZqV2h7Z2PCv5s4A8PgSN5CQAA3cQZ5alsUQ7iJM+hz26EYxoqewA4UbuP6Srr44k0Hf8Cv74g/i14zegZhV29sigF18AihoyeuoAZzE78QTvSMSVHKB33/hkAxnqAGCtUIWqToPaNXoDVBFRZffHcOntHSLIYL1ThaoSgRDCGiJ7QgqDkX0aDLl9EpCgcPB16fjSyoGT9gI/gCdFSKwjJwQB28IKKgCrs2A7kJRDSKwmVakXokIgmqcKNVBBE9IQZFwQ0Sgr3X5XcptpEOt5vv6czpAL7wgirtbwIdvFjZBV9yv0y+0xpZ6FmUTqCDPSLptbBCl1GuK4//X4oDfjQIbVOqfINsU6saYKc1pICC+iTdvoBtydAbgm3F1eq1W/E6GEXx1loyVnAk6msrHDeghRHUoXi3Mz3+CXYbQisiFs0cBxOCIm+FEoUD5hkYYm+T63C8C+qTfDUndwjQqQESDA1/7ndO+53FXLgv9oAHwXVDfR/0EJuZ7QdzgU+KI/kSqZ20CQ2+AXENjGhqOxbVA10ojvmqxBFiLyv2nkKrJMQKXi7V9qOLQ8Wtqgu50ROzDpBisEF+urc8zGKmuhj3VRE9Q4EY91KG2MzrSjFVXvyrGiAKKe5pXlc/cj44+QwnQaVnHV+xUbYi4wkKYGiwedpbwmNPcSzdx3vCVrmRV3dJMx6T435G+wV2gtrfixHaEQvNK8JlGux2xbTL/gwLBguKw3vVJYoHvGv2HZHADnUN+mK8OIsLGgpqvtfdE7vWvR1agIPKBp7H7XjkLkGDWcxXSutyRKETLnrvG7LA0+48b5M0pJj3JvrrBUttYs5KqGhMcNu77zZRA4rDR7VtOUEroEJyhZkxnoPkv+Neq4vdbFR7c2Jd7WjIFruX2F+LIwjQgKeYxUE2LiZy5oeYaXduDoU3RFrOvZ6xb0rxcVauDcgl2rvFDqHPXrp4kRT5MRRwT38NKRpiq+CXjZ5nnwrXsiBGF020X1/hSHGhKsGnWr9CqhvaS5pbpbh4VMmncBtWBdTdYYxrcapCIIoPmg0qfAW4ApoajfUft0RxsdXJkvZJjAG62u+QWwiNKb729Bv7FaWNI1hERhZzPJ/VRWBEcf1cG1RptJBNPW0Q9ZcaiqiluC5MLB1rTb5gwmNzUqoLvqFAS7F8NjTkpfz/S8E2zcl3wm/kVVFcb1fm8sMP4D9OjzB62uEb48QAieJ2nzVrNRCqAHPpBdHTCTZROhrgta7LomNxIAod+cNIHDprQ4/Uvpx9/tjCf5PtaGydimZXVZy+7xWPyWlgYHEqpCXyNM1dy11PxXw+K/bjVPmgnMXlgT1FbKQstIuzTzka+BEoUTbTxwPfCCIc1X/LEPo24p1DFgGpsKoa5Ci5tiB0Z8Y57yESxlLxJlBtpg1k4rJcnCO6YmAoF6j+ip/Ie4rcv9Vt9N7Qf/lUZf5/QAcH40dFTnzbVjRNs+F49TjbrdXskhv2gx3NrFUwvdlIhh3WLmN3s7GospcIcbvpktmlObsbTnhNpvC7jeMdvMFg3Vi49uuWoKx5XzCPdaBxKPANslUsihtWwDPEnRdn/BvdrIeoQDhw5Dx985v18ATSBq/kYRbjDNxYoBTL+SraefCRkM3WB6FcTstdMeqo694q/AeJmLhmgdwrsQAAAABJRU5ErkJggg=="/>
        <div className="md:text-3xl text-2xl font-bold pb-10 pt-12 text-blue-400">
          PIR Readings
        </div>
        <div className="md:text-3xl text-2xl font-bold pb-10 pt-12 text-blue-400">

          {/* Graph code here  */}

        </div>
          <div className="w:full">
            <Link to={`${basePath}/pirreading`}>
              <button className="btn text-white bg-gray-900 hover:bg-gray-700">
                More details
              </button>
            </Link>
        </div>
      </div>
  );
}

export default PirReadings;
