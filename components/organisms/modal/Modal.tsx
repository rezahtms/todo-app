'use client'
import TaskInput from '@/components/atoms/taskInput/TaskInput'
import { Button, Dialog, FormLabel, Stack, Typography } from '@mui/material'
import Textarea from '@mui/joy/Textarea'
import { FC, useContext } from 'react'
import { TodoContext } from '@/contexts/TodoProvider'
import { I_Modal } from '@/utils/types/pageTypes'

const Modal: FC<I_Modal> = ({ openModal, setIsModal }) => {
  const { addNewTask } = useContext(TodoContext)
  return (
    <Dialog
      open={openModal}
      onClose={setIsModal}
      sx={{
        backgroundColor: 'hsla(0, 0%, 25.49019607843137%, 0.308)',
        backdropFilter: 'blur(3px)',
      }}
    >
      <form
        onSubmit={event => {
          event.preventDefault()
          const formData = Object.fromEntries(
            new FormData(event.currentTarget).entries()
          ) as any
          addNewTask({
            id: Date.now().toString(),
            status: 'todo',
            ...formData,
          })
          setIsModal()
        }}
      >
        <Stack
          direction='column'
          spacing={1}
          sx={{
            backgroundColor: 'hsla(0, 0%, 25.49019607843137%, 0.308)',
            backdropFilter: 'blur(9px)',
            p: 1,
          }}
        >
          <Typography
            variant='h6'
            color='white'
            bgcolor='#0288d1'
            padding='0 4px'
            borderRadius='4px'
          >
            Adding Task
          </Typography>
          <TaskInput name='title' placeholder='Enter Task Title' autofocus />
          <TaskInput name='assigned' placeholder='Task For ' />
          <FormLabel htmlFor='define-task'>Define Task</FormLabel>
          <Textarea
            name='defined'
            color='neutral'
            minRows={3}
            size='lg'
            placeholder='Define task'
            id='define-task'
          />
          <Button type='submit' color='info' variant='contained'>
            Add
          </Button>
        </Stack>
      </form>
    </Dialog>
  )
}
export default Modal
