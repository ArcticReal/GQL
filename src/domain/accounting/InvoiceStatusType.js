
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {InvoiceType} from '../accounting/InvoiceType.js';
import {UserLoginType} from '../login/UserLoginType.js';


const InvoiceStatusType = new GraphQLObjectType({
  name: 'InvoiceStatusType',
  description: 'Type for InvoiceStatus in accounting',

  fields: () => ({
    statusDate: {type: GraphQLString},
    statusId: {type: GraphQLString},
    invoice: {
      type: InvoiceType,
      args : {invoiceId: {type: GraphQLString}},
      resolve: (invoiceStatus, args, {loaders}) => loaders.ofbiz.load(`invoices/find?invoiceId=${invoiceStatus.invoiceId}`)
    },
    changeByUserLogin: {
      type: UserLoginType,
      args : {changeByUserLoginId: {type: GraphQLString}},
      resolve: (invoiceStatus, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${invoiceStatus.changeByUserLoginId}`)
    }
  })
});

export {InvoiceStatusType};
    