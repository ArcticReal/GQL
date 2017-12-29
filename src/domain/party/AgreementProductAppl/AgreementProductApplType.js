
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

import {AgreementItemType} from '../../party/AgreementItem/AgreementItemType.js';
import {ProductType} from '../../product/Product/ProductType.js';


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
      resolve: (agreementProductAppl, args, {loaders}) => loaders.ofbiz.load(`party/agreement/agreementItems/find?agreementId=${agreementProductAppl.agreementId}`)
    },
    agreementItemSeqId: {type: GraphQLString}
  })
});

export {AgreementProductApplType};
    