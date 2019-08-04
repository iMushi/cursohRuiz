
function Contador() {
    var that = this;

    that.cuenta = 0;

    setInterval(function incrementa() {
        console.log('THIS=====>', this);
        console.log('THAT=====>', that);
        that.cuenta++;
    },1000)
}

// var contador = new Contador();



function ContadorDos() {

    this.cuenta = 0;

    setInterval( () => {
        console.log('this=====>', this);
        this.cuenta++;
    },1000)
}

// var contador = new ContadorDos();


function suma(a, b){
    return a + b
}

const sumaFlecha = (a, b) => {
    return a + b
}

const sumaFlecha2 = (a, b) => a + b

const a = 3;
const b = 4;

const sumaFlecha3 = _ => a + b


const sumaFlecha4 = a => b => (a === 1 ? 5 : a) + b

function suma5(a){
    return function (b){
        return a+b;
    }
}
/*
console.log(suma(2,2))
console.log(sumaFlecha(2,2))
console.log(sumaFlecha2(4,4))
console.log(sumaFlecha3())
console.log(sumaFlecha4(1)(5) )
console.log(suma5(1)(5) );
*/

(function(){
    const x = 1;
    if(true){
        const x = 2;
        console.log('Valor x====>' , x);
    }
    console.log('Valor x====>' , x);
});


let cosasPorHacer = ['Jugar Futbol'
    , 'Jugar Play'
    , 'Estudiar Primaria'
    , 'Estudiar Secu'
    , 'Estudiar Prepa'
    , 'Estudiar Carrera'
    , 'Trabajar de godin'
    , 'Trabajar de freelance']


let cicloVida = ['Nacer', 'Crecer', ...cosasPorHacer, 'Envejecer', 'Morir'];

const cosasVida = (param1, param2) => {
    console.log(param1)
    console.log(param2)
}

// cosasVida(...cosasPorHacer)

let y = (...n) => {
    console.log(n);
}

// y(1,2,3);

const miJson = {
    a: 1,
    b: 2
}

const jsonNuevo = {
    ...miJson,
    otraProp: 'abc'
}

// console.log(jsonNuevo)
// console.log(cosasPorHacer.map( (valor, index) => valor + index))
// console.log(cosasPorHacer)

/*
console.log(
    cosasPorHacer
        .filter( value => value.indexOf('Estudiar') != -1)
        .map( (value ,index) => `No me gusta ${value} porque me da hueva => ${index}` )
)
*/

const numeros = [1,2,3];
const numeros2 = [4,5,6];
const numeros3 = [7,8,9];

/*
console.log(
    numeros.reduce( (valorAnterior, valorActual, index) => valorAnterior + valorActual, 0 )
)
*/

/*
console.log(
    [numeros, numeros2, numeros3]
        .reduce( (valorAnterior, valorActual, index) => [...valorAnterior, ...valorActual], [] )

)
*/


const jsonData = {
    air_conditioning: null,
    car: {
        details: {
            air_cond_type: {
                code: 'R',
                description: 'Yes'
            },
            class_category: {
                code: 'S',
                description: 'Standard'
            },
            doors: 4,
            features: [],
            image_url: 'https://images.trvl-media.com/cars/39/ZD_USA_Buick_Verano_SC_20160621_t.jpg',
            inclusion: [],
            luggage: {
                large: 1,
                small: 2
            },
            model: 'Buick Verano FWD',
            passengers: 5,
            transmission_type: {
                code: 'A',
                description: 'Automatic transmission'
            },
            type: {
                code: 'C',
                description: '2/4Door Car'
            },
            upgrades: [],
            vendor_logo: 'https://images.trvl-media.com/cars/logos/ZD.png'
        },
        drop_off: {
            date_time: '2019-06-13T17:00:00+00:00',
            rental_location: {
                address: {
                    city_name: 'Cicero',
                    country_code: '',
                    postal_code: '13039-8654',
                    state_province_code: 'NY',
                    street1: '5885 EAST CIRCLE DRIVE NW',
                    street2: 'WING T-21 INSIDE AUTO MALL'
                },
                hours: [
                    '07:30:00 - 18:00:00',
                    '07:30:00 - 18:00:00'
                ],
                latitude: 43.147684,
                location_code: 'SYR',
                location_name: 'Cicero Drivers Village',
                location_number: 'SYRN001',
                longitude: -76.116334,
                vendor_code: 'ZD'
            }
        },
        pick_up: {
            date_time: '2019-06-13T13:00:00+00:00',
            rental_location: {
                address: {
                    city_name: 'Cicero',
                    country_code: '',
                    postal_code: '13039-8654',
                    state_province_code: 'NY',
                    street1: '5885 EAST CIRCLE DRIVE NW',
                    street2: 'WING T-21 INSIDE AUTO MALL'
                },
                hours: [
                    '07:30:00 - 18:00:00',
                    '07:30:00 - 18:00:00'
                ],
                latitude: 43.147684,
                location_code: 'SYR',
                location_name: 'Cicero Drivers Village',
                location_number: 'SYRN001',
                longitude: -76.116334,
                vendor_code: 'ZD'
            }
        },
        rate: {
            detailed_total_pricing: {
                base_rate: {
                    cent_to_currency_ratio: 100,
                    cents: 3500,
                    currency: 'USD',
                    decimal_mark: '.',
                    subunit: 'Cent',
                    symbol: '$',
                    thousands_separator: ','
                },
                mandatory_charges: {
                    mandatory_charge: [
                        {
                            amount: {
                                cent_to_currency_ratio: 100,
                                cents: 3500,
                                currency: 'USD',
                                decimal_mark: '.',
                                subunit: 'Cent',
                                symbol: '$',
                                thousands_separator: ','
                            },
                            description: 'Base Price',
                            is_included: true,
                            period_rate: {
                                cent_to_currency_ratio: 100,
                                cents: 3500,
                                currency: 'USD',
                                decimal_mark: '.',
                                subunit: 'Cent',
                                symbol: '$',
                                thousands_separator: ','
                            }
                        },
                        {
                            amount: {
                                cent_to_currency_ratio: 100,
                                cents: 700,
                                currency: 'USD',
                                decimal_mark: '.',
                                subunit: 'Cent',
                                symbol: '$',
                                thousands_separator: ','
                            },
                            description: 'Taxes and Fees',
                            is_included: true,
                            period_rate: {
                                cent_to_currency_ratio: 100,
                                cents: 700,
                                currency: 'USD',
                                decimal_mark: '.',
                                subunit: 'Cent',
                                symbol: '$',
                                thousands_separator: ','
                            }
                        }
                    ],
                    mandatory_charge_total: {
                        cent_to_currency_ratio: 100,
                        cents: 700,
                        currency: 'USD',
                        decimal_mark: '.',
                        subunit: 'Cent',
                        symbol: '$',
                        thousands_separator: ','
                    }
                },
                rate_break_down: {
                    rate_break_down_total: {
                        cent_to_currency_ratio: 100,
                        cents: 700,
                        currency: 'USD',
                        decimal_mark: '.',
                        subunit: 'Cent',
                        symbol: '$',
                        thousands_separator: ','
                    },
                    rate_break_down_units: [
                        {
                            car_rate_period: {
                                code: 'D',
                                description: 'Daily'
                            },
                            number_of_units: 1,
                            period_rate: {
                                cent_to_currency_ratio: 100,
                                cents: 3500,
                                currency: 'USD',
                                decimal_mark: '.',
                                subunit: 'Cent',
                                symbol: '$',
                                thousands_separator: ','
                            },
                            rate_period_total: {
                                cent_to_currency_ratio: 100,
                                cents: 3500,
                                currency: 'USD',
                                decimal_mark: '.',
                                subunit: 'Cent',
                                symbol: '$',
                                thousands_separator: ','
                            }
                        }
                    ]
                }
            },
            rate: {
                book_token: 'CgdFWFBFRElBEjBjYXJfZXhwZWRpYV9lMDEwNGNmNy1hMWE3LTQwMjEtODUwMi1lYjUwN2FkMTk3ZDQ=',
                credit_card_required: false,
                fees: [],
                maximum_rental: '14 D',
                mileage_allowance: {
                    extra_distance_rate: {
                        cent_to_currency_ratio: 100,
                        cents: 0,
                        currency: '',
                        decimal_mark: '.',
                        subunit: 'Cent',
                        symbol: '$',
                        thousands_separator: ','
                    },
                    free_distance: -1,
                    period_unit: 'Daily',
                    unlimited_mileage_allowance: true
                },
                minimum_rental: '1 D',
                rate_fees: [
                    {
                        cents: 700,
                        code: '',
                        currency: 'USD',
                        description: 'Rental, SALES TAX'
                    }
                ],
                rate_plan: {
                    code: 'AQ'
                },
                sales_model: 2,
                total_cost: {
                    cent_to_currency_ratio: 100,
                    cents: 4200,
                    currency: 'USD',
                    decimal_mark: '.',
                    subunit: 'Cent',
                    symbol: '$',
                    thousands_separator: ','
                },
                unit_price: {
                    cent_to_currency_ratio: 100,
                    cents: 3500,
                    currency: 'USD',
                    decimal_mark: '.',
                    subunit: 'Cent',
                    symbol: '$',
                    thousands_separator: ','
                },
                unit_rate_period: {
                    code: '',
                    description: 'Daily'
                }
            }
        },
        vendor: {
            code: 'ZD',
            description: 'Budget'
        }
    },
    car_rental_rules: [
        {
            code: 'GeneralText',
            description: 'RATE GUARANTEED\r\nSTD DAILY\r\nMUST RETURN TO REQUESTED CITY\r\nTO USE A DEBIT CARD AT A LOCATION THAT ACCEPTS\r\nTHEM YOU ARE SUBJECT TO ADDITIONAL CREDIT CHECKS\r\nOR MUST PRESENT ADDITIONAL IDENTIFICATION.\r\nTHE MINIMUM RENTAL PERIOD IS 001 DAYS\r\nMIN AGE 18  18-20 UAS   84.00DY\r\n            21-24 UAS   35.00DY\r\nOTHER RESTRICTIONS MAY APPLY.\r\nCONTACT LOCAL REP FOR DETAILS\r\n 10.00     EXTENSION FEE MAY APPLY\r\n 20.00     LATE FEE MAY APPLY\r\n'
        },
        {
            code: 'Advisory',
            description: 'ADVISORY: CHARGES ASSOCIATED WITH THE BASE RATE ARE THOSE WHICH ARE APPLICABLE AT THE TIME OF BOOKING AND COULD BE SUBJECT TO   CHANGE.  ONLY THOSE CHARGES LISTED AS MANDATORY ARE INCLUDED IN THE TOTAL RATE FOR THE DISPLAYED RENTAL.\r\n'
        },
        {
            code: 'Age',
            description: 'MINIMUM AGE -\r\nTHE MINIMUM AGE TO RENT OR DRIVE A BUDGET VEHICLE\r\nIS 18 YEARS OF AGE.\r\n                        .\r\nDRIVERS BETWEEN THE AGES OF 18-24 WILL NOT BE PERMITTED\r\nTO RENT LUXURY CARS - MINI VANS - 12 PASSENGER VANS -\r\nSPECIALTY VEHICLES - FULL SIZE SUVS OR PREMIUM SUVS.\r\n                        .\r\nAGE SURCHARGE  -\r\n84.00 USD PER DAY UNDERAGE SURCHARGE APPLIES TO\r\nRENTERS 18-20 YEARS OF AGE.\r\n35.00 USD PER DAY UNDERAGE SURCHARE APPLIES TO\r\nRENTERS 21-24 YEARS OF AGE.\r\n                        .\r\nRENTERS MAY BE EXEMPT FROM THE UNDERAGE SURCHARGE IF\r\nPRESENTING ONE OF THE FOLLOWING -\r\n-BUDGET CHARGE CARD.\r\n-QUALIFYING CORPORATE ID.\r\n-GOVERNMENT VISA/MASTERCARD OR TRAVEL/PURCHASE ORDER.\r\n'
        },
        {
            code: 'AssociatedCarMakes',
            description: 'ECAR /HYUNDAI/ACCENT/4  5\r\nCCAR /NISSAN/VERSA/2-4  4\r\nICAR /HYUNDAI/ELANTRA/4  5\r\nSCAR /VOLKSWAGEN/JETTA/4  5\r\nFCAR /HYUNDAI/SONATA/4  5\r\nPCAR /VOLKSWAGEN/PASSAT/4  5\r\nLCAR /CHRYSLER/300 LTD/4  5\r\nWCAR /NISSAN/FRONTIER/4  5\r\nFDAH /TOYOTA/PRIUS HYBRID/4  5\r\nMVAR /DODGE/CARAVAN/4  7\r\nFVAR /FORD/TRANSIT/4  12\r\nPVAR /FORD/TRANSIT/4  15\r\nSSAR /FORD/MUSTANG/2  4\r\nSTAR /FORD/MUSTANG CONVERTIBLE/2  4\r\nIFAR /JEEP/RENEGADE/4  5\r\nSFAR /MITSUBISHI/OUTLANDER SEL/4  7\r\nRFAR /FORD/EXPLORER 2WD/4WD/4  7\r\nFFAR /CHEVROLET/TAHOE/4  7\r\nPFAR /FORD/EXPEDITION EL/4  7\r\nLXAR /CADILLAC/XTS FWD/4  5\r\nFPAR /FORD/F150 CREW XLT/4  5\r\nREAR /DODGE/CHARGER RT/2  4\r\nCRAR /JEEP/WRANGLER/4  4\r\n'
        },
        {
            code: 'CollisionDamageWaiver',
            description: 'LOSS DAMAGE WAIVER VARIES BY CAR GROUP CONFIRMED\r\nTHE MINIMUM AMOUNT IS $9.00 USD PER DAY NOT TO EXCEED\r\n$12.00 USD PER DAY.\r\n'
        },
        {
            code: 'AgencyCommission',
            description: 'ALL APPLICABLE AGENCY COMMISSIONS PAID AFTER\r\nCOMPLETION OF RENTAL.\r\n'
        },
        {
            code: 'CreditCard',
            description: 'CREDIT CARDS ACCEPTABLE FOR DEPOSIT\r\nAX BU CA DC DS VI \r\nCREDIT CARDS ACCEPTABLE FOR GUARANTEE\r\nAX BU CA DC DS JC VI \r\n'
        },
        {
            code: 'DropOffCharges',
            description: 'ONE-WAY RENTALS -\r\nFOR ACCURATE RATE QUOTE ENTER LOCATION CODE OF THE\r\nDROP OFF LOCATION IN THE APPROPRIATE FIELD FOR THE BEST\r\nAVAILABLE RATE. IF A DROP OFF CHARGE APPLIES TO THE\r\nRESERVATION IT WILL BE RETURNED WITH YOUR CONFIRMATION.\r\n                        .\r\nCARS ARE SUBJECT TO ONE WAY AVAILABILITY AND FEES.\r\n'
        },
        {
            code: 'SpecialEquipment',
            description: 'Child Seat/Infant (0-12 month / 0-13kg)\r\nInfantSeat\r\nCHILD SEAT INFANT -\r\nAT PARTICIPATING LOCATIONS  CHILD SEAT INFANT PRICES\r\nARE GENERALLY 13.00 PER DAY BUT CAN VARY BY LOCATION.\r\nSPECIAL EQUIPMENT IS NOT GUARANTEED. CHECK WITH\r\nRESERVATIONS OR THE RENTAL LOCATION FOR AVAILABILITY\r\nAND ADDITIONAL DETAILS.\r\nChild Seat/Toddler 4-7 years / 15-30 kg)\r\nToddlerSeat\r\nCHILD SEAT TODDLER/BOOSTER -\r\nAT PARTICIPATING LOCATIONS  CHILD SEAT TODDLER/BOOSTER\r\nPRICES ARE GENERALLY 13.00 PER DAY BUT CAN VARY BY\r\nLOCATION.\r\nSPECIAL EQUIPMENT IS NOT GUARANTEED. CHECK WITH\r\nRESERVATIONS OR THE RENTAL LOCATION FOR AVAILABILITY\r\nAND ADDITIONAL DETAILS.\r\nHand Ctrl/Left\r\nHandControlLeft\r\nHAND CONTROL LEFT -\r\nAVAILABLE AT NO ADDITIONAL CHARGE MUST CALL\r\nRESERVATIONS AT LEAST 48 HOURS IN ADVANCE TO REQUEST.\r\nHand Ctrl/Right\r\nHandControlRight\r\nHAND CONTROL RIGHT -\r\nAVAILABLE AT NO ADDITIONAL CHARGE MUST CALL\r\n'
        },
        {
            code: 'ExpressService',
            description: 'FASTBREAK COUNTER -\r\n                        .\r\nHOURS - SAME AS OFFICE HOURS.\r\n                        .\r\nPROCEED TO THE BUDGET RENTAL COUNTER. SHOW YOUR DRIVERS\r\nLICENSE AND IDENTIFY YOURSELF AS A FASTBREAK MEMBER.\r\nTHE BUDGET RENTAL AGENT WILL PROVIDE YOU WITH YOUR\r\nPREPRINTED CONTRACT AND KEYS.\r\n'
        },
        {
            code: 'ReturnRefueling',
            description: '1. PREPAID FUEL SERVICE OPTION -\r\n   AT SOME LOCATIONS  CUSTOMERS CAN PAY IN ADVANCE FOR\r\n   A FULL TANK OF FUEL AND BRING THE VEHICLE BACK\r\n   EMPTY. THERE WILL BE NO REFUND FOR UNUSED FUEL.\r\n   THIS OPTION MUST BE ELECTED AT TIME OF RENTAL.\r\n                                                      .\r\n2. RETURN WITH A FULL TANK OPTION -\r\n   THE CUSTOMER BRINGS THE VEHICLE BACK WITH A FULL\r\n   TANK AND PROVIDES A RECEIPT FOR THE FUEL PURCHASED\r\n   AVOIDING A REFUELING SERVICE CHARGE.\r\n                                                      .\r\n3. FUEL SERVICE CHARGE AND EZ FUEL OPTION -\r\n   IF THE CUSTOMER DECLINES THE FUEL SERVICE OPTION\r\n   THEN THE CUSTOMER WILL BE CHARGED FOR FUEL AT THE\r\n   LOCATION*S CURRENT REFUELING CHARGE.  AT MOST\r\n   LOCATIONS IF THE VEHICLE IS DRIVEN LESS THAN 75\r\n   MILES AN AUTOMATIC EZ FUEL SERVICE CHARGE OF\r\n   15.99 USD -OR 16.99 USD IN CALIFORNIA- WILL BE\r\n   APPLIED.  THIS SERVICE CHARGE CAN BE AVOIDED IF\r\n   THE CUSTOMER PURCHASED FUEL AND PROVIDES THE\r\n   COUNTER WITH A RECEIPT UPON RETURNING THE VEHICLE.\r\n'
        },
        {
            code: 'Insurance',
            description: 'PUBLIC LIABILITY AND PROPERTY DAMAGE ARE INCLUDED IN\r\nTHE RATE AT NO ADDITIONAL CHARGE.\r\n                .\r\nSLI-SUPPLEMENTAL LIABILITY INSURANCE -\r\nTHE PRICE OF SLI VARIES BY STATE.\r\nTHE MINIMUM AMOUNT IS 11.69 PER DAY NOT TO EXCEED\r\n16.84 PER DAY.\r\n'
        },
        {
            code: 'Miscellaneous',
            description: '               CROSS BORDER TRAFFIC\r\nUSA - MOST LOCATIONS ALLOW ALL VEHICLES TO BE DRIVEN\r\nTHROUGHOUT THE 48 CONTIGUOUS STATES. FOR TRAVEL\r\nDETAILS OUTSIDE OF THE RENTING STATE..PLEASE CONTACT\r\nRESERVATIONS OR THE RENTAL LOCATION FOR ADDITIONAL\r\nDETAILS.\r\n                        .\r\nTRAVEL INTO MEXICO IS NOT ALLOWED AT MOST LOCATIONS.\r\nTO INQUIRE ABOUT TRAVEL INTO MEXICO PLEASE CONTACT\r\nRESERVATIONS OR THE RENTAL LOCATION FOR ADDITIONAL\r\nDETAILS.\r\n                        .\r\nTRAVEL INTO CANADA IS ALLOWED AT MOST LOCATIONS.\r\nTO INQUIRE ABOUT TRAVEL INTO CANADA PLEASE CONTACT\r\nRESERVATIONS OR THE RENTAL LOCATION FOR ADDITIONAL\r\nDETAILS.\r\n                        .\r\nNOTE - PLEASE ADVISE COUNTER OF CANADIAN TRAVEL WHEN\r\nPICKING UP THE VEHICLE. THE COUNTER PLACES A CANADIAN\r\nNON-RESIDENT INSURANCE CARD IN THE RENTAL VEHICLE\r\nWHENEVER A U.S. REGISTERED RENTAL VEHICLE GOES INTO\r\nCANADA.\r\n                        .\r\nMAKE/MODELS -\r\n THE BUDGET FLEET IS INTENDED AS A GUIDE TO THE\r\n VEHICLES GENERALLY AVAILABLE. HOWEVER ALL VEHICLE\r\n GROUPS AND MODELS MAY NOT BE AVAILABLE AT THIS\r\n LOCATION. CHECK AVAILABILITY TO VERIFY VEHICLE GROUPS.\r\n                         .\r\n  E-TOLL TERMS AND CONDITIONS -\r\nIF YOU DO NOT PAY CASH FOR TOLLS YOU AUTOMATICALLY OPT\r\nINTO OUR E-TOLL SERVICE PURSUANT TO WHICH YOU AGREE TO\r\nPAY US OR OUR TOLL PROGRAM ADMINISTRATOR WITH WHOM\r\nWE WILL SHARE YOUR CREDIT CARD/DEBIT INFORMATION FOR\r\nALL TOLLS INCURRED DURING YOUR RENTAL AND ALL RELATED\r\nFEES CHARGES AND PENALTIES.  UNDER THE E-TOLL PROGRAM\r\nONCE YOU PASS THROUGH AN ELECTRONIC TOLL YOU WILL PAY\r\nA CONVENIENCE FEE OF 3.95 USD FOR EACH DAY OF THE\r\nENTIRE RENTAL PERIOD INCLUDING ANY DAYS ON WHICH\r\nE-TOLL IS NOT USED UP TO A MAXIMUM OF 19.75 USD PER\r\nRENTAL MONTH PLUS INCURRED TOLLS AT THE MAXIMUM\r\nPREVAILING RATES POSTED BY THE TOLL AUTHORITY.  YOU\r\nCAN AVOID THE CONVENIENCE FEE AND ANY OTHER CHARGES\r\nBY PAYING THE TOLL IN CASH USING YOUR ELECTRONIC TOLL\r\nDEVICE OR AVOIDING ANY CASHLESS TOLL ROAD OR PASSAGE.\r\nPLEASE BE AWARE OF ROADS THAT MAYBE *CASHLESS TOLLS*\r\nAND DRIVERS ON THESE ROADS ARE NOT ABLE TO PAY CASH\r\nONCE THEY HAVE ENTERED THESE ROADS.  YOU AUTOMATICALLY\r\nOPT INTO OUR E-TOLL SERVICE PROGRAM AND WILL BE CHARGED\r\n3.95 USD FOR EACH DAY OF THE ENTIRE RENTAL PERIOD\r\nINCLUDING ANY DAYS ON WHICH E-TOLL IS NOT USED UP TO A\r\nMAXIMUM OF 19.75 USD PER RENTAL MONTH PLUS INCURRED\r\nTOLLS AT THE MAXIMUM PREVAILING RATES POSTED BY THE\r\nTOLL AUTHORITY.  THE CHARGES MAY TAKE 4-8 WEEKS AFTER\r\nTHE RENTAL TO BE BILLED TO YOUR CREDIT CARD/DEBIT CARD\r\nON FILE.\r\n'
        },
        {
            code: 'PersonalAccidentInsurance',
            description: 'PAE-PERSONAL ACCIDENT AND EFFECTS INSURANCE -\r\n9.95 PER DAY - ALL CAR GROUPS\r\nPAE IS NOT AVAILABLE ON ANY VAN RENTALS.\r\nHOWEVER RATE IS DIFFERENT IN THESE STATES-\r\nNEW YORK - 3.00 PER DAY FOR 1ST 3 DAYS - ALL CAR GROUPS\r\n.          2.00 FOR EACH ADDL DAY - ALL CAR GROUPS\r\nWASHINGTON - 7.95 PER DAY - ALL CAR GROUPS\r\n                .\r\nESP-EMERGENCY SICKNESS PLAN -\r\n5.00 PER DAY - ALL CAR GROUPS\r\nEXCEPTION -\r\nNEW YORK - NOT AVAILABLE\r\n'
        },
        {
            code: 'AcceptedFormsOfPayment',
            description: 'PAYMENT OPTIONS-\r\nTHE PAYMENT POLICY MAY VARY AT SOME LOCATIONS.\r\nPLEASE CHECK WITH RESERVATIONS OR THE RENTAL LOCATION\r\nFOR DETAILS.\r\n                                                      .\r\n2 CREDIT CARDS IN THE RENTERS NAME ARE REQUIRED TO\r\nRENT ALL SPECIALTY OR STREET FLEET VEHICLES AT\r\nPARTICIPATING LOCATIONS.\r\n                                                      .\r\nCREDIT CARDS-            .\r\nAMERICAN EXPRESS.. MASTERCARD.. VISA.. DINERS CLUB..\r\nSEARS.. DISCOVER.. JAPAN CREDIT BUREAU.. BUDGET CHARGE\r\nCARD\r\n                                                      .\r\nDEBIT CARD POLICY-\r\nTHIS LOCATION DOES ACCEPT BANK DEBIT CARDS WITH THE\r\nMASTERCARD OR VISA LOGO AT THE TIME OF RENTAL IF YOU\r\nARE AT LEAST 25 YEARS OF AGE. AT AIRPORT LOCATIONS YOU\r\nWILL BE REQUIRED TO SHOW PROOF OF A RETURN AIRLINE\r\nFLIGHT THAT CORRESPONDS WITH YOUR RENTAL. YOU WILL\r\nBE SUBJECT TO A CREDIT CHECK TO DETERMINE AND ENSURE\r\nCREDIT WORTHINESS BEFORE RELEASING THE CAR TO YOU.\r\nTHE NAME OF THE RENTER MUST BE ON THE DEBIT CARD.\r\n                         .\r\nCURRENTLY AT ALL U.S. AND CANADA LOCATIONS DEBIT\r\nCARDS ARE NOT ACCEPTABLE AS CREDIT IDENTIFICATION AT\r\nTHE TIME OF RENTAL FOR ANY MAKES AND MODELS\r\nIDENTIFIED IN THE BUDGET SPECIALTY OR STREET FLEET\r\nAS WELL AS CERTAIN OTHER PREMIUM VEHICLES.\r\n                                                      .\r\nBUDGET WILL GENERALLY REQUEST AN AUTHORIZATION HOLD\r\nAGAINST YOUR ACCOUNT FOR THE ESTIMATED CHARGES OF\r\nTHE RENTAL BUT RESERVES THE RIGHT IN ITS SOLE\r\nDISCRETION TO REQUEST AN EXTRA VALUE TO BE BASED ON\r\nCERTAIN FACTORS AS WE DEEM APPROPRIATE. THESE FUNDS\r\nWILL NOT BE AVAILABLE FOR YOUR USE. WHEN THE RENTAL\r\nIS OVER WE WILL PROCESS THE REVERSAL BUT THE BANK\r\nMAY TAKE TIME TO POST IT BACK TO THE ACCOUNT.\r\nIF YOU FAIL TO RETURN THE VEHICLE AS AGREED BUDGET WILL\r\nOBTAIN ADDITIONAL AUTHORIZATIONS FROM YOUR ACCOUNT\r\nTO COVER THE RENTAL CHARGES.\r\n                         .\r\nNOTE - IF WE ARE UNABLE TO COMPLETE THE CREDIT CHECK OR\r\nIF THE LOCATION DOES NOT PERFORM CREDIT CHECKS THE\r\nCUSTOMER MUST ALSO BE PREPARED TO PRESENT A SECOND FORM\r\nOF ID. PLEASE CHECK WITH RESERVATIONS OR THE RENTAL\r\nLOCATION FOR DETAILS.\r\n                                                      .\r\nEXCEPTION LOCATIONS - THE AIRPORTS IN THESE CITIES\r\nLISTED BELOW WILL NOT REQUIRE THE RETURN AIRLINE TICKET\r\nOR FLIGHT ITINERARY AT THE TIME OF RENTAL.\r\n                                                      .\r\nSTATE      CITY\r\nARKANSAS   FORT SMITH TEXARKANA\r\nCALIFORNIA CARLSBAD  MONTEREY  OXNARD  REDDING  SANTA\r\n           BARBARA  SONOMA COUNTY APT-SANTA ROSA\r\nCOLORADO   ASPEN  FT. COLLINS  GRAND JUNCTION\r\n           GUNNISON  EAGLE VAIL APT-GYPSUM\r\n           YAMPA VALLEY APT-HAYDEN  MONTROSE\r\n           STEAMBOAT SPRINGS\r\nHAWAII     HILO  HONOLULU  KAHULUI  KONA  LIHUE\r\nIDAHO      SUN VALLEY APT-HAILEY  POCATELLO  TWIN FALLS\r\nILLINOIS   ROCKFORD  LEWIS UNIVERSITY APT-ROMEOVILLE\r\nMICHIGAN   JACKSON  MUSKEGON  PELLSTON\r\n           OAKLAND COUNTY INTL APT-WATERFORD\r\nMONTANA    BOZEMAN APT-BELGRADE  BUTTE  HELENA\r\nOHIO       YOUNGSTOWN MUNICIPAL APT-VIENNA\r\nOKLAHOMA   LAWTON\r\nTEXAS      TEXAS GULF COAST REGIONAL APT-ANGLETON\r\n           BEAUMONT  MIDLAND  SAN ANGELO  WICHITA FALLS\r\nWASHINGTON TRI CITIES APT-PASCO\r\nWYOMING    CASPER  ROCK SPRINGS\r\n                                                      .\r\nAT THE END OF THE RENTAL ANOTHER ACCEPTABLE CREDIT OR\r\nDEBIT CARD CAN BE USED FOR PAYMENT OF RENTAL CHARGES.\r\n                                                      .\r\nNOTE- PREPAID DEBIT CARDS OR GIFT CARDS ARE NOT\r\nACCEPTABLE METHODS OF CREDIT IDENTIFICATION TO PICK UP\r\nA CAR AT ANY LOCATION. ONE OF THE ABOVE MENTIONED\r\nCARDS MUST BE PRESENTED. PREPAID DEBIT CARDS OR GIFT\r\nCARDS ARE ACCEPTED AT TIME OF RETURN ONLY.\r\n                         .\r\nCASH-\r\nA CREDIT/DEBIT CARD IS REQUIRED AT THIS LOCATION. CASH\r\nRENTALS ARE NOT ALLOWED AT THE BEGINNING OR AS PAYMENT\r\nAT THE END OF THE RENTAL.\r\n                                                      .\r\nVOUCHER-\r\nAT PARTICIPATING LOCATIONS  TRAVEL VOUCHERS ARE\r\nACCEPTED FOR PAYMENT ONLY. THE RENTER MUST PRESENT A\r\nVALID FORM OF CREDIT ID ALONG WITH THE VOUCHER.\r\n'
        },
        {
            code: 'ShuttleService',
            description: 'PICK-UP SERVICE WILL BE CONFIRMED WITH A 24 HOUR\r\nADVANCE NOTICE IF CUSTOMER IS WITHIN 5 MILES OF\r\nTHE RENTAL LOCATION.\r\n                                                      .\r\nIF LESS THAN 24 HOURS NOTICE OR PICK-UP IS MORE\r\nTHEN 5 MILES FROM RENTAL LOCATION THEN THE SERVICE\r\nMAY NOT BE AVAILABLE. IN EITHER CASE THE CUSTOMER\r\nMUST CALL THE RENTAL LOCATION DIRECTLY TO ARRANGE.\r\n'
        },
        {
            code: 'StateAndLocalTax',
            description: 'TAX..FEES AND SURCHARGES CAN VARY AND ARE INCLUDED IN\r\nTHE ESTIMATED TOTAL.\r\n                         .\r\nCUSTOMERS UTILIZING FREQUENT FLYER OR TRAVELER\r\nPROGRAMS MAY BE SUBJECT TO ADDITIONAL SURCHARGES\r\nRANGING FROM APPROXIMATELY .06 CENTS PER DAY TO 1.00\r\nPER DAY BASED ON THE PROGRAM.\r\n'
        },
        {
            code: 'DriversLicense',
            description: 'LICENSE AND ADDITIONAL DRIVER REQUIREMENTS -\r\n                        .\r\nTHE DRIVERS LICENSE POLICY MAY VARY AT SOME LOCATIONS.\r\nPLEASE CHECK WITH RESERVATIONS OR THE RENTAL LOCATION\r\nFOR DETAILS.\r\n                        .\r\nAT TIME OF RENTAL DRIVER MUST PRESENT A VALID DRIVERS\r\nLICENSE IN THE DRIVERS NAME. ALL DRIVERS MUST HAVE A\r\nSAFE DRIVING RECORD. YOU MAY BE ASKED TO SIGN A DRIVING\r\nRECORD ADDENDUM OR BE SUBJECT TO A COMPUTERIZED\r\nDEPARTMENT OF MOTOR VEHICLES CHECK. BASED UPON SUCH\r\nSEARCH BUDGET RESERVES THE RIGHT TO DENY A RENTAL\r\nOPPORTUNITY.\r\n                        .\r\nNON UNITED STATES CITIZENS WHO PRESENT A FOREIGN\r\nDRIVERS LICENSE AT THE TIME OF RENTAL WILL BE REQUIRED\r\nTO PRESENT A VALID CURRENT NON ALTERED PASSPORT AS A\r\nSECOND FORM OF IDENTIFICATION. CANADIAN CITIZENS\r\nENTERING THE UNITED STATES BY WAY OF BORDER CROSSING\r\nCAR- TRAIN- BUS OR SHIP WITH A DRIVERS LICENSE\r\nCONTAINING THE WORD -ENHANCED- OR THE FRENCH PHRASE\r\n-PERMIS DE CONDUIRE PLUS- MAY BE ACCEPTED IN LIEU OF A\r\nPASSPORT. CANADIAN CITIZENS ENTERING THE UNITED STATES\r\nBY AIR WILL BE REQUIRED TO PRESENT A VALID CANADIAN\r\nPASSPORT.\r\n                        .\r\nEXCEPTION - ALL NORTHEAST U.S. CORPORATE LOCATIONS-\r\n  RENTER WHO ARE RENTING *RESERVATION/WALKUP/UPSELL*\r\n  A SPECIALTY *COOL CAR* *XA-XX VEHICLE GROUPS* AND\r\n  PRESENTS A NON U.S. ISSUED DRIVERS LICENSE ALONG WITH\r\n  A U.S. ADDRESS DURING THE QUALIFICATION PROCESS WILL\r\n  ALSO BE REQUIRED TO PRODUCE A NON U.S. ISSUED\r\n  PASSPORT FROM THE SAME COUNTRY IDENTIFIED ON THE\r\n  DRIVERS LICENSE THAT IS PRESENTED.\r\n                        .\r\n  RENTERS PRESENTING A DRIVER*S LICENSE FROM MALI OR\r\n  CAMEROON WHO WISH TO RENT A VEHICLE OTHER THAN\r\n  CAR GROUPS A-E MUST ALSO PRESENT AN INTERNATIONAL\r\n  DRIVER*S PERMIT AND A VALID PASSPORT FROM THE SAME\r\n  COUNTRY IDENTIFIED ON THE DRIVER*S LICENSE. THESE\r\n  RENTERS WILL ALSO BE REQUIRED TO PRESENT\r\n  SECONDARY FORM OF CREDIT IDENTIFICATION TO\r\n  COMPLETE THE RENTAL PROCESS.\r\n                        .\r\nADDITIONAL DRIVER REQUIREMENTS\r\nTHE ADDITIONAL DRIVER POLICY AND OR FEES MAY VARY AT\r\nSOME LOCATIONS. PLEASE CHECK WITH RESERVATIONS OR THE\r\nRENTAL LOCATION FOR DETAILS.\r\n                        .\r\nAT PARTICIPATING US PUERTO RICO AND US VIRGIN ISLANDS\r\nLOCATIONS MINIMUM AGE IS 25 AND MUST MEET SAME\r\nREQUIREMENTS AS PRIMARY DRIVER. THE ADDITIONAL DRIVER\r\nMUST HAVE A CREDIT CARD IN THEIR OWN NAME. A MAXIMUM\r\nOF 2 PERSONS MAY SIGN ON AS AN ADDITIONAL DRIVER.\r\n                        .\r\nTHE FOLLOWING DRIVERS ARE EXCEPTIONS TO THE ABOVE\r\nPOLICIES AND ARE NOT REQUIRED TO SIGN AN ADDITIONAL\r\nDRIVER FORM. THESE DRIVERS ARE ALSO EXEMPT FROM THE\r\nADDITIONAL DRIVER FEE. THESE DRIVERS MAY DRIVE THE\r\nVEHICLE WITH THE RENTERS PERMISSION AND RETURN THE\r\nVEHICLE. THEY ARE NOT REQUIRED TO PROVIDE CREDIT\r\nIDENTIFICATION AT THE TIME OF RENTAL OR BE PRESENT.\r\n                        .\r\n- RENTERS FELLOW EMPLOYEE ON COMPANY BUSINESS.\r\n- RENTERS SPOUSE OR LIFE PARTNER.\r\n- DISABLED RENTERS WHO HAVE COMPLETED THE\r\n  NON-LICENSED RENTER FORM. NOTE - AN AUTHORIZED\r\n  DRIVER FOR A DISABLED RENTER IS EXEMPT FROM THE\r\n  ADDITIONAL DRIVER CREDIT REQUIREMENT.\r\n                        .\r\nADDITIONAL DRIVER FEE\r\nADDITIONAL DRIVER FEES ARE GENERALLY 13.00 PER DAY\r\nHOWEVER IN -\r\n-CALIFORNIA THERE IS NO ADDITIONAL DRIVER FEE.\r\n-NEW YORK THE FEE IS 3.00 PER DAY PER ADDITIONAL DRIVER\r\n-NEVADA THE FEE IS 12.80 PER DAY PER ADDITIONAL DRIVER.\r\n                        .\r\n'
        }
    ],
    car_search_vehicles: [],
    discount_code: null,
    driver_age: 30,
    dropoff_location: null,
    dropoff_location_address_city: null,
    dropoff_location_address_country: 'US',
    dropoff_location_address_state: null,
    dropoff_location_address_street: null,
    dropoff_location_address_zip: null,
    dropoff_location_iata: null,
    dropoff_location_latitude: null,
    dropoff_location_longitude: null,
    dropoff_location_type: null,
    dropoff_use_address: 0,
    end_date: '2019-06-13',
    end_time: '17:00',
    errors: [],
    id: 97,
    pickup_location: 'Mexico, New York, United States of America',
    pickup_location_address_city: 'Mexico, New York, United States of America',
    pickup_location_address_country: 'US',
    pickup_location_address_state: null,
    pickup_location_address_street: null,
    pickup_location_address_zip: null,
    pickup_location_country: null,
    pickup_location_iata: '',
    pickup_location_latitude: null,
    pickup_location_longitude: null,
    pickup_location_type: null,
    pickup_use_address: 0,
    promotion_code: null,
    rental_type: 0,
    service_errors: [],
    special_equipment: [],
    start_date: '2019-06-13',
    start_time: '13:00',
    transmission_type: null,
    vendor: {
        code: 'ZD',
        description: 'Budget'
    },
    vendor_code: null,
    vendor_codes: []
}

const {
    car
    ,car:{details:{doors:puertas}}
    ,rental_type
    ,vendor
    ,pickup_location
    ,car_rental_rules
} = jsonData;


const [firstRule, secondRule, ...todasReglas] = car_rental_rules

const miObjeto = {};
miObjeto.rental_type = rental_type;
miObjeto.vendor = vendor;
miObjeto.pickup_location = pickup_location;
miObjeto.puertas = puertas;

// console.log(miObjeto);

const miObjetoNuevaGen = {
    rental_type
    , vendor
    , pickup_location
    , puertas
    , firstRule
    , secondRule
}

// console.log(miObjetoNuevaGen);

const despliegaDirecciones = ({pick_up, drop_off}, [primerRegla]) => {

    const {rental_location:{address: pickUpAddress}} = pick_up;

    console.log('pick_up==>', pickUpAddress)
    console.log('primerRegla==>', primerRegla)

}


// despliegaDirecciones(car, todasReglas)


const nuevoObjeto = { ...miObjetoNuevaGen };
const nuevoObjetoConJSON = JSON.parse(JSON.stringify(miObjetoNuevaGen))

//console.log(miObjetoNuevaGen);

nuevoObjeto.puertas = 6
nuevoObjetoConJSON.puertas = 6

// console.log(miObjetoNuevaGen);


/*
Escribir una funcion que reciba un numero y sume
los dígitos de dicho numero hasta alcanzar un somo dígito

198 ==> 18
18 => 9

199 => 19
19 => 10
10 => 1
*/


const addThemDigits = (digits) => {

    console.log('Them Digits =>', digits);

    const reduced = digits
        .toString().split('')
        .reduce((prev, curr) => Number(prev) + Number(curr), 0);
    return reduced > 9 ? addThemDigits(reduced) : reduced;
}



const inOrderChars = (string) => {

    let resultBoolean = 'IN ORDER';
    let result = '';

    if (!string.length) {
        return [result, resultBoolean];
    }
    result = [...string].reduce((prev, curr) => {
        const [lastChar] = [...prev.slice(-1)];
        let result = '';
        if (lastChar.toUpperCase().charCodeAt() < curr.toUpperCase().charCodeAt()) {
            result = '<';
        } else {
            result = '>';
            resultBoolean = 'NOT IN ORDER';
        }
        return prev + result + curr;
    });


    return [result, resultBoolean];
}

// console.log(inOrderChars('ABCDE'))


const logErrorToDB = (err) => {
    console.log(err)
    return new Promise((resolve, reject) => {
        resolve('OK')
    })
}

const getUsers = () => {
    console.log( 'getUsers ===> ');
    return new Promise(  (resolve, reject) => {
        setTimeout( () => {
            resolve( 'Get Users is done!!' );
        }, 5000)
    })
}


const getProduct = ( responseAnterior ) => {
    console.log( 'responseAnterior ===> ', responseAnterior);
    console.log( 'getProds ===> ');
    return new Promise(  (resolve, reject) => {
        setTimeout( () => {
            resolve( 'Get Prods is done' );
        }, 1000)
    })
}

const getIssues = ( responseAnterior ) => {
    console.log( 'responseAnterior ===> ', responseAnterior);
    console.log( 'getIssues ===> ');
    return new Promise(  (resolve, reject) => {
        setTimeout( () => {
            resolve( 'Get Issues is done!!' );
        }, 1000)
    })
}

// getUsers().then(console.log);
/*
getUsers()
    .then(getProduct)
    .then(getIssues)
    .then(msg => {
        console.log( `

        ${msg}


        Proceso completado

        `)
    })
    .catch( logErrorToDB)

*/

Promise.all( [getUsers(), getProduct(), getIssues()] ).then(
    results => {
        console.log(results)
    }
).catch(console.log)








