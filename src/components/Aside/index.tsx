import { useTransition, config } from 'react-spring';
import { FiX, FiCalendar, FiAlertCircle } from 'react-icons/fi';
import QRCode from 'react-qr-code';

import * as Styled from './styles';
import { Point } from '../../types';
import { Shimmer } from '../Shimmer';

interface AsideProps {
  show: boolean;
  setShow: (value: boolean) => void;
  point: Point | undefined;
}

export function Aside({ show, setShow, point }: AsideProps) {
  const transitions = useTransition(show, {
    from: { right: -600, display: 'none' },
    enter: { right: 0, display: 'flex' },
    leave: { right: -600 },
    config: config.stiff,
  })

  return transitions(
    (styles, item) => item && (
      
      <Styled.Wrapper style={styles}>
        <Styled.CloseButton onClick={() => setShow(false)}>
          <FiX size={32} color="#545454" />
        </Styled.CloseButton>

        {point ? (
          <>
          <Styled.Title>
            Ponto de Iluminação <br />
            #{point.number}
          </Styled.Title>

          <Styled.Section>
            <Styled.SectionTitle>Endereço</Styled.SectionTitle>

            <Styled.AddressContainer>
              <Styled.Address>
                <p>{point.address} - {point.district}</p>
                <span>{point.city}/{point.state} - {point.cep}</span>
                <span>{`${point.lat}, ${point.lng}`}</span>
              </Styled.Address>

              <QRCode value={point.number} size={80} fgColor="#333" />
            </Styled.AddressContainer>
          </Styled.Section>

          <Styled.Divider />

          <Styled.Section>
            <Styled.SectionTitle>Atributos</Styled.SectionTitle>

            <Styled.AttributesContainer>
              <Styled.AttributeColumn>
                <Styled.Attribute>
                  <p>Tipo do Poste</p>
                  <span>Duplo T</span>
                </Styled.Attribute>

                <Styled.Attribute>
                  <p>Fixação do Poste</p>
                  <span>Engatado</span>
                </Styled.Attribute>

                <Styled.Attribute>
                  <p>Material do Poste</p>
                  <span>Concreto</span>
                </Styled.Attribute>
              </Styled.AttributeColumn>

              <Styled.AttributeColumn>
                <Styled.Attribute>
                  <p>Tipo de Cabo</p>
                  <span>Alumnio Nu</span>
                </Styled.Attribute>

                <Styled.Attribute>
                  <p>Aterramento</p>
                  <span>Neutro COPEL</span>
                </Styled.Attribute>

                <Styled.Attribute>
                  <p>Telegestão</p>
                  <span>Sim</span>
                </Styled.Attribute>
              </Styled.AttributeColumn>

              <Styled.AttributeColumn>
                <Styled.Attribute>
                  <p>Tipo do Comando</p>
                  <span>Indidual</span>
                </Styled.Attribute>

                <Styled.Attribute>
                  <p>Tipo de rede</p>
                  <span>Aerea COPEL</span>
                </Styled.Attribute>

                <Styled.Attribute>
                  <p>Altura da luminaria/Poste</p>
                  <span>8.0/10.5 M</span>
                </Styled.Attribute>
              </Styled.AttributeColumn>
            </Styled.AttributesContainer>

            <Styled.SectionLink>
              Ver mais detalhes
            </Styled.SectionLink>
          </Styled.Section>

          <Styled.Divider />

          <Styled.Section>
            <Styled.SectionTitle>Últimas Ocorrênciass</Styled.SectionTitle>
            <Styled.OcurrencesContainer>
              <Styled.Ocurrence>
                <div>
                  <Styled.OcurrenceDate>
                    <FiCalendar size={16} color="#2F8FE9" />
                    <span>11/09/2021</span>
                  </Styled.OcurrenceDate>
                  <Styled.OcurrenceType>
                    <FiAlertCircle size={16} color="#2F8FE9" />
                    <span>Lâmpada queimada</span>
                  </Styled.OcurrenceType>
                </div>
                <div>
                  <Styled.OcurrenceStatus>Pendente</Styled.OcurrenceStatus>
                  <Styled.OcurrenceNumber>#0000239</Styled.OcurrenceNumber>
                </div>
              </Styled.Ocurrence>

              <Styled.Ocurrence>
                <div>
                  <Styled.OcurrenceDate>
                    <FiCalendar size={16} color="#2F8FE9" />
                    <span>23/08/2021</span>
                  </Styled.OcurrenceDate>
                  <Styled.OcurrenceType>
                    <FiAlertCircle size={16} color="#2F8FE9" />
                    <span>Vandalismo</span>
                  </Styled.OcurrenceType>
                </div>
                <div>
                  <Styled.OcurrenceStatus>Pendente</Styled.OcurrenceStatus>
                  <Styled.OcurrenceNumber>#0000239</Styled.OcurrenceNumber>
                </div>
              </Styled.Ocurrence>
            </Styled.OcurrencesContainer>
          </Styled.Section>
          </>
        ): (
          <>
            <Styled.Title>
              <Shimmer width={219} height={30} /> <br />
              <Shimmer width={110} height={30} />
            </Styled.Title>

            <Styled.Section>
              <Styled.SectionTitle>
                <Shimmer width={80} height={20} />
              </Styled.SectionTitle>

              <Styled.AddressContainer>
                <Styled.Address>
                  <Shimmer width={320} height={20} />
                  <Shimmer width={300} height={20} />
                  <Shimmer width={350} height={20} />
                </Styled.Address>

                <Shimmer width={80} height={80} />
              </Styled.AddressContainer>
            </Styled.Section>

            <Styled.Divider />

            <Styled.Section>
            <Styled.SectionTitle>
              <Shimmer width={80} height={20} />
            </Styled.SectionTitle>

            <Styled.AttributesContainer>
              <Styled.AttributeColumn>
                <Styled.Attribute>
                  <Shimmer width={140} height={15} />
                  <Shimmer width={140} height={15} />
                </Styled.Attribute>

                <Styled.Attribute>
                  <Shimmer width={140} height={15} />
                  <Shimmer width={140} height={15} />
                </Styled.Attribute>

                <Styled.Attribute>
                  <Shimmer width={140} height={15} />
                  <Shimmer width={140} height={15} />
                </Styled.Attribute>
              </Styled.AttributeColumn>

              <Styled.AttributeColumn>
                <Styled.Attribute>
                  <Shimmer width={140} height={15} />
                  <Shimmer width={140} height={15} />
                </Styled.Attribute>

                <Styled.Attribute>
                  <Shimmer width={140} height={15} />
                  <Shimmer width={140} height={15} />
                </Styled.Attribute>

                <Styled.Attribute>
                  <Shimmer width={140} height={15} />
                  <Shimmer width={140} height={15} />
                </Styled.Attribute>
              </Styled.AttributeColumn>

              <Styled.AttributeColumn>
                <Styled.Attribute>
                  <Shimmer width={140} height={15} />
                  <Shimmer width={140} height={15} />
                </Styled.Attribute>

                <Styled.Attribute>
                  <Shimmer width={140} height={15} />
                  <Shimmer width={140} height={15} />
                </Styled.Attribute>

                <Styled.Attribute>
                  <Shimmer width={140} height={15} />
                  <Shimmer width={140} height={15} />
                </Styled.Attribute>
              </Styled.AttributeColumn>
            </Styled.AttributesContainer>

            <Styled.SectionLink>
              <Shimmer width={120} height={15} />
            </Styled.SectionLink>
          </Styled.Section>

          <Styled.Divider />

          <Styled.Section>
            <Styled.SectionTitle><Shimmer width={150} height={20} /></Styled.SectionTitle>
            <Styled.OcurrencesContainer>
              <Shimmer width={505} height={75} />

              <Shimmer width={505} height={75} />
            </Styled.OcurrencesContainer>
          </Styled.Section>
          </>
        )}
      </Styled.Wrapper>
    )
  )
}