
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {JobSandbox} from '../product/JobSandbox.js';
import {Product} from '../product/Product.js';
import {StatusItem} from '../product/StatusItem.js';


const ProductGroupOrder = new GraphQLObjectType({
  name: 'ProductGroupOrderType',
  description: 'Type for ProductGroupOrder in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    job: {
      type: JobSandboxType,
      args : {jobId: {type: GraphQLString}},
      resolve: (productGroupOrder, args, {loaders}) => loaders.ofbizArray.load(`jobSandboxs/find?=${args.jobId}`)
    },
    groupOrderId: {type: GraphQLString},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productGroupOrder, args, {loaders}) => loaders.ofbizArray.load(`products/find?=${args.productId}`)
    },
    status: {
      type: StatusItemType,
      args : {statusId: {type: GraphQLString}},
      resolve: (productGroupOrder, args, {loaders}) => loaders.ofbizArray.load(`statusItems/find?=${args.statusId}`)
    },
    reqOrderQty: {type: GraphQLFloat},
    soldOrderQty: {type: GraphQLFloat},
    thruDate: {type: GraphQLString}
  })
});

export {ProductGroupOrder};
    