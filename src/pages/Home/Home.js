import React from 'react'
import Text from '../../components/Text/Text'
import EmailInput from '../../components/EmailInput/EmailInput'
import NumberCard from '../../components/NumberCard/NumberCard'
import MainImage from '../../components/MainImage/MainImage'
import {
  EmailInputWrapper,
  ImgWrapper,
  InfoWrapper,
  MainWrapper,
  MediumTextWrapper,
  NumberCardWrapper,
  XLargeTextWrapper,
} from './components'

const Home = () => {
  return (
    <MainWrapper>
      <InfoWrapper>
        <Text type={'xsmall'}>
          Booking of doctor’s appointment
        </Text>
        <XLargeTextWrapper> <Text type={'xlarge'}>
          Don’t Miss Our Exclusive Patient Special
        </Text>
        </XLargeTextWrapper>
        <MediumTextWrapper>
          <Text type={'medium'}>
            We want to make sure that everyone has access to natural and
            effective
            care. With our special, you’ll receive a consultation and a digital
            posture assessment.
          </Text>
        </MediumTextWrapper>
        <EmailInputWrapper>
          <EmailInput/>
        </EmailInputWrapper>
        <NumberCardWrapper>
          <NumberCard bigText={'240'}>
            Qualified Doctors &
            Medical Specialists
          </NumberCard>
          <NumberCard bigText={'1.456'} isBlue>
            Medical Tests Done
            For Our Patients
          </NumberCard>
          <NumberCard bigText={'1M+'}>
            Years of Experience
            The Medical Field
          </NumberCard>
        </NumberCardWrapper>
      </InfoWrapper>
      <ImgWrapper>
        <MainImage/>
      </ImgWrapper>
    </MainWrapper>
  )
}

export default Home