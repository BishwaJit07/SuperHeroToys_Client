import { Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react';
import  { Fragment, useState } from 'react';

function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${
          id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    );
  }
  
const Blogs = () => {
    const [open, setOpen] = useState(0);
 
    const handleOpen = (value) => {
      setOpen(open === value ? 0 : value);
    };
    return (
        <div className='p-2'>
            <Fragment >
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)} className='text-white hover:text-blue-200'>
        What is express js? What is Nest JS?
        </AccordionHeader>
        <AccordionBody className='text-white '>
        NestJS:

NestJS is a progressive and opinionated Node.js framework for building scalable and efficient server-side applications. It is built with TypeScript and leverages concepts from Angular, such as decorators, dependency injection, and modules. NestJS focuses on developer productivity, maintainability, and extensibility. It provides a solid architectural foundation and follows the principles of modularity and reusability. NestJS supports various transport layers, including HTTP, WebSockets, and microservices. It also offers features like authentication, validation, logging, and testing utilities
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)} className='text-white hover:text-blue-200'>
        What is MongoDB aggregate and how does it work ?
        </AccordionHeader>
        <AccordionBody className='text-white'>
        MongoDB Aggregate:

MongoDB's aggregation framework is a powerful tool for performing data analysis and complex operations on MongoDB collections. It allows for data transformation, filtering, grouping, joining, and computation of aggregate values. The aggregation pipeline consists of multiple stages that process the documents sequentially, with each stage applying specific operations to the data. These stages can include $match, $group, $project, $sort, `$lookup
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)} className='text-white hover:text-blue-200'>
        What is an access token and refresh token? How do they work and where should we store them on the client-side?
        </AccordionHeader>
        <AccordionBody className='text-white'>
        Access Token and Refresh Token:

Access Token: An access token is a credential used to authenticate and authorize access to protected resources in a system. It is usually a short-lived token that is issued by an authentication server upon successful authentication of a user. The access token contains information about the user and permissions, which can be used to authorize subsequent requests to protected resources.
Refresh Token: A refresh token is a long-lived token that is used to obtain a new access token when the current access token expires. It is typically issued alongside an access token and is securely stored on the client-side. When the access token expires, the client can use the refresh token to request a new access token without requiring the user to re-authenticate.
The flow typically works as follows: The client sends the user's credentials to the authentication server, which verifies them and issues an access token and a refresh token. The client stores the refresh token securely (e.g., in an HTTP-only cookie or local storage) and includes the access token in each request to access protected resources. When the access token expires, the client can use the refresh token to obtain a new access token without requiring the user to re-authenticate.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(4)} className='text-white hover:text-blue-200'>
        Compare SQL and NoSQL databases?
        </AccordionHeader>
        <AccordionBody className='text-white'>
        SQL vs. NoSQL Databases:

SQL (Structured Query Language) databases are based on a relational model, where data is organized into tables with predefined schemas. They use SQL for defining and manipulating the data. Examples of SQL databases include MySQL, PostgreSQL, and Oracle. SQL databases are known for their strong consistency, ACID transactions, and support for complex queries. They are suitable for applications with structured and relational data.

NoSQL (Not Only SQL) databases are non-relational databases that provide flexible schemas and horizontal scalability. They can handle large amounts of unstructured or semi-structured data. NoSQL databases use various data models, such as key-value, document, columnar, or graph-based. Examples of NoSQL databases include MongoDB, Cassandra, and Redis. NoSQL databases offer high scalability, eventual consistency, and are often used in modern web applications, real-time analytics, and handling big data.

The choice between SQL and NoSQL databases depends on the specific requirements of the application, such as the structure of the data, scalability needs, performance requirements, and the complexity of queries.
        </AccordionBody>
      </Accordion>
    </Fragment>
        </div>
    );
};

export default Blogs;