export const C_JOB_DATA = 'C_JOB_DATA'

export const getJobData = () => {
    .get('')
    .then(res => {
        console.log('Initial Call for jobs', res.data)
        newState(res.data)
    })
    .catch(err => console.log('Initial Call jobs', err))
}