import React from 'react'
import { Box, Container, Stack, Typography } from '@mui/material'
import { useContext } from 'react'
import { TodoContext } from '@/contexts/TodoProvider'
import DefinedTask from '@/components/molecules/definedTask/DefinedTask'
import { I_Tasks_Type, TaskColumn } from '@/utils/types/pageTypes'

const ProgressTasks = () => {
  const { task, handleDragDrop } = useContext(TodoContext)
  const taskData: I_Tasks_Type[] = task || []

  const columns = ['todo', 'doing', 'done']
  const renderableColumns = columns.map(
    (status, i) =>
      ({
        id: i.toString(),
        columnTitle: status,
        taskList: taskData.filter(item => item.status === status),
      } satisfies TaskColumn)
  )

  const handleOnDrop = (id: string, title: string) => {
    handleDragDrop(id, title)
  }

  const handleDragOver = (id: string, status: string) => {
    handleDragDrop(id, status)
  }

  const handleDragLeave = (id: string, title: string) => {
    handleDragDrop(id, title)
  }

  const handleDragEnd = (id: string, title: string) => {
    handleDragDrop(id, title)
  }

  return (
    <Container sx={{ mt: 1, p: 1 }} maxWidth='xl'>
      <Stack spacing={2} direction='row'>
        {renderableColumns.map(taskColumn => (
          <Box
            key={taskColumn.id}
            onDrop={e => {
              e.preventDefault()
              const taskId = e.dataTransfer.getData('text/plain')
              handleOnDrop(taskId, taskColumn.columnTitle)
            }}
            onDragOver={e => e.preventDefault()}
            sx={{
              backgroundColor: 'hsla(0, 0%, 25.49019607843137%, 0.308)',
              backdropFilter: 'blur(9px)',
              p: 1,
              border: '1px solid rgba(65, 65, 65, 0.493)',
              borderRadius: 0.5,
              overflowY: 'scroll',
              height: '80vh',
              width: '31vw',
              maxHeight: '100%',
            }}
          >
            <Typography variant='h4' color='#fff'>
              {taskColumn.columnTitle}
            </Typography>
            {taskColumn.taskList.map((data, index) => (
              <Box
                key={index}
                draggable
                onDragStart={e => {
                  e.dataTransfer.setData('text/plain', data.id)
                }}
                onDragOver={() => handleDragOver(data.id, data.status)}
                onDragLeave={() =>
                  handleDragLeave(data.id, taskColumn.columnTitle)
                }
                onDragEnd={() =>
                  handleDragEnd(data.id, String(taskColumn.columnTitle))
                }
              >
                <DefinedTask {...data} key={`Task-Data-${index}`} />
              </Box>
            ))}
          </Box>
        ))}
      </Stack>
    </Container>
  )
}
export default ProgressTasks
