import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import microConfig from "./mikro-orm.config";

const main = async () => {
    const orm = await MikroORM.init(microConfig);
    await orm.getMigrator().up();
    const post = orm.em.create(Post, {
        title: 'My first post',
        createdAt: "",
        updatedAt: ""
    });
    await orm.em.persistAndFlush(post);
    // console.log('--------------- sql 2 --------------------');
    // await orm.em.nativeInsert(Post, {title: 'My second post'});
    // O comando acima é obsoleto. Para ele funcionar, os campos de createAt deveria ter um valor default: 'NOW()'
    
};

main ().catch((error) => {
    console.log(error);
});
