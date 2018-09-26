import WorkItem from './WorkItem';

export default ({ data }) => (
  <section className='work-feed'>
    {data.map((item, i) => {
      <WorkItem key={i} item={item} />
    })}
  </section>
)
