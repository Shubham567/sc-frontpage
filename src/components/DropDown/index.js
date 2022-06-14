import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const DropDown = ({data,topBtnProps,...props}) => {

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button {...topBtnProps}>
          {data.name}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute left-0 mt-2 w-56 shadow-lg bg-white focus:outline-none">
          <div className="py-1">
            {
              data.menuItems.map((mi => {
                return <Menu.Item key={mi.name}>
                  <a
                    href={mi.href || "#"}
                    onClick={mi.onClick}
                    className={classNames(
                      'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    {
                      mi.name
                    }
                  </a>
                </Menu.Item>
              }))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default DropDown;
