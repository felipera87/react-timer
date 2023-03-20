import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  FormContainer,
  TaskInput,
  MinutesAmountInput,
  HomeContainer,
  Separator,
  StartCountdownButton,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form>
        <FormContainer>
          <label htmlFor="task">I&apos;ll work on</label>
          <TaskInput
            type="text"
            id="task"
            placeholder="Put a name for your task"
            list="task-suggestions"
          />

          <datalist id="task-suggestions">
            <option value="Code" />
            <option value="Bug fix" />
            <option value="Regular task" />
          </datalist>

          <label>for</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />

          <span>minutes.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton type="submit">
          <Play size={24} />
          Start
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
