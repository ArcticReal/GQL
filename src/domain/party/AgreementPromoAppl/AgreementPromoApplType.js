
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

import {ProductPromoType} from '../../product/ProductPromo/ProductPromoType.js';
import {AgreementItemType} from '../../party/AgreementItem/AgreementItemType.js';


const AgreementPromoApplType = new GraphQLObjectType({
  name: 'AgreementPromoApplType',
  description: 'Type for AgreementPromoAppl in party',

  fields: () => ({
    fromDate: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    agreement: {
      type: AgreementItemType,
      args : {agreementId: {type: GraphQLString}},
      resolve: (agreementPromoAppl, args, {loaders}) => loaders.ofbiz.load(`party/agreement/agreementItems/find?agreementId=${agreementPromoAppl.agreementId}`)
    },
    agreementItemSeqId: {type: GraphQLString},
    productPromo: {
      type: ProductPromoType,
      args : {productPromoId: {type: GraphQLString}},
      resolve: (agreementPromoAppl, args, {loaders}) => loaders.ofbiz.load(`product/product/productPromos/find?productPromoId=${agreementPromoAppl.productPromoId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {AgreementPromoApplType};
    