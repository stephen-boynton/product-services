import { Text } from '@/components/Text'
import styles from './PercentageBars.module.scss'

type PercentageBarsProps = {
  percentages: { label: string; value: number }[]
}

export const PercentageBars = ({ percentages }: PercentageBarsProps) => {
  return (
    <div className={styles.percentageBars}>
      {percentages.map((percentage, index) => (
        <div key={index} className={styles.barContainer}>
          <Text variant="copy1" as="p" className={styles.barLabel}>
            {percentage.label}
          </Text>
          <div className={styles.bar}>
            <div
              className={styles.barFill}
              style={{ width: `${percentage.value}%` }}
            />
          </div>
          <Text variant="copy1" as="p">
            {percentage.value}%
          </Text>
        </div>
      ))}
    </div>
  )
}
