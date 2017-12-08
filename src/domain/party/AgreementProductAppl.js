
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

import {AgreementItemType} from '../party/AgreementItem.js';
import {ProductType} from '../product/Product.js';


const AgreementProductApplType = new GraphQLObjectType({
  name: 'AgreementProductApplType',
  description: 'Type for AgreementProductAppl in party',

  fields: () => ({
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (agreementProductAppl, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${agreementProductAppl.productId}`)
    },
    price: {type: GraphQLFloat},
    agreement: {
      type: AgreementItemType,
      args : {agreementId: {type: GraphQLString}},
      resolve: (agreementProductAppl, args, {loaders}) => loaders.ofbiz.load(`agreementItems/find?agreementId=${agreementProductAppl.agreementId}`)
    },
    agreementItemSeqId: {type: GraphQLString}
  })
});

export {AgreementProductApplType};
    




const AgreementProductApplInputType = new GraphQLInputObjectType({
  name: 'AgreementProductApplInputType',
  description: 'input type for AgreementProductAppl in party',

  fields: () => ({
    productId: {type: GraphQLString},
    price: {type: GraphQLFloat},
    agreementId: {type: GraphQLString},
    agreementItemSeqId: {type: GraphQLString}
  })
});

export {AgreementProductApplInputType};
    