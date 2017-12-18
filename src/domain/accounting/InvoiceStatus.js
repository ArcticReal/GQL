
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {InvoiceType} from '../accounting/Invoice.js';
import {UserLoginType} from '../login/UserLogin.js';


const InvoiceStatusType = new GraphQLObjectType({
  name: 'InvoiceStatusType',
  description: 'Type for InvoiceStatus in accounting',

  fields: () => ({
    statusDate: {type: GraphQLString},
    statusId: {type: GraphQLString},
    invoice: {
      type: InvoiceType,
      args : {invoiceId: {type: GraphQLString}},
      resolve: (invoiceStatus, args, {loaders}) => loaders.ofbiz.load(`accounting/invoices/find?invoiceId=${invoiceStatus.invoiceId}`)
    },
    changeByUserLogin: {
      type: UserLoginType,
      args : {changeByUserLoginId: {type: GraphQLString}},
      resolve: (invoiceStatus, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${invoiceStatus.changeByUserLoginId}`)
    }
  })
});

export {InvoiceStatusType};
    




const InvoiceStatusInputType = new GraphQLInputObjectType({
  name: 'InvoiceStatusInputType',
  description: 'input type for InvoiceStatus',

  fields: () => ({
    changeByUserLoginId: {type: GraphQLString},
    invoiceId: {type: GraphQLString},
    statusDate: {type: GraphQLString},
    statusId: {type: GraphQLString}
  })
});

export {InvoiceStatusInputType};
    