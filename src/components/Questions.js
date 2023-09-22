import '../assets/styles/components/Questions.css'

export default function Questions() {
  return (
    <div className='questions'>
      <ol className="fs-5 text-secondary p-0">
        <li className='row active'>
          <label htmlFor='checkbox-1' className="col-11">
            1. Are you able to see the screen clearly without loss of vision?
          </label>
          <div className="col-1">
            <input type="checkbox" class="form-check-input border-dark" id='checkbox-1'/>
          </div>
        </li>
        <li className='row ms-0'>
          <label htmlFor='checkbox-2' className="col-11">
            2. Do you feel dizzy, drowsy, or disoriented?
          </label>
          <div className="col-1">
            <input type="checkbox" class="form-check-input border-dark" id='checkbox-2'/>
          </div>
        </li>
        <li className='row ms-0'>
          <label htmlFor='checkbox-3' className="col-11">
            3. Do you feel shortness of breath?
          </label>
          <div className="col-1">
            <input type="checkbox" class="form-check-input border-dark" id='checkbox-3'/>
          </div>
        </li>
        <li className='row ms-0'>
          <label htmlFor='checkbox-4' className="col-11">
            4. Do you experience chest pain?
          </label>
          <div className="col-1">
            <input type="checkbox" class="form-check-input border-dark" id='checkbox-4'/>
          </div>
        </li>
        <li className='row ms-0'>
          <label htmlFor='checkbox-5' className="col-11">
            5. Do you experience pain in one or both eyes?
          </label>
          <div className="col-1">
            <input type="checkbox" class="form-check-input border-dark" id='checkbox-5'/>
          </div>
        </li>
        <li className='row ms-0'>
          <label htmlFor='checkbox-6' className="col-11">
            6. Do you feel little interest or pleasure in doing things?
          </label>
          <div className="col-1">
            <input type="checkbox" class="form-check-input border-dark" id='checkbox-6'/>
          </div>
        </li>
        <li className='row ms-0'>
          <label htmlFor='checkbox-7' className="col-11">
            7. Do you feel down, depressed, or hopeless?
          </label>
          <div className="col-1">
            <input type="checkbox" class="form-check-input border-dark" id='checkbox-7'/>
          </div>
        </li>
        <li className='row ms-0'>
          <label htmlFor='checkbox-8' className="col-11">
            8. Do you have trouble concentrating on things, such as reading this text?
          </label>
          <div className="col-1">
            <input type="checkbox" class="form-check-input border-dark" id='checkbox-8'/>
          </div>
        </li>
        <li className='row ms-0'>
          <label htmlFor='checkbox-9' className="col-11">
            9. Do you constantly feel tired or have little energy?
          </label>
          <div className="col-1">
            <input type="checkbox" class="form-check-input border-dark" id='checkbox-9'/>
          </div>
        </li>
        <li className='row ms-0'>
          <label htmlFor='checkbox-10' className="col-11">
            10. Do you have thoughts of inflicting self-harm?
          </label>
          <div className="col-1">
            <input type="checkbox" class="form-check-input border-dark" id='checkbox-10'/>
          </div>
        </li>
      </ol>
    </div>
  )
}

