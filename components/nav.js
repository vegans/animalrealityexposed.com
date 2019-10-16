import React from 'react'
import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const Link2 = ({href, children}) => <Link href={href}><a className="nav-link">{children}</a></Link>

const AppNav = () => (
  <Navbar bg="light" expand="lg">
    <Link href="/" passHref>
      <Navbar.Brand>Animal Reality Exposed</Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Link2 href="/about">About A.R.E</Link2>
        <Link2 href="/find-group">Find a group</Link2>
        <Link2 href="/code-of-conduct">Code of conduct</Link2>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default AppNav
